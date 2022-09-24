import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

const BUCKET_NAME = "hugo-workers"
const BUCKET_URL = `http://storage.googleapis.com/${BUCKET_NAME}`

async function serveAsset(event) {
  const url = new URL(event.request.url)
  const cache = caches.default
  let response = await cache.match(event.request)

  if (!response) {
    response = await fetch(`${BUCKET_URL}${url.pathname}`)
    const headers = { "cache-control": "public, max-age=86400" }
    response = new Response(response.body, { ...response, headers })
    event.waitUntil(cache.put(event.request, response.clone()))
  }
  return response
}

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }

      let response = await serveAsset(event)
      if (response.status > 399) {
        response = new Response(response.statusText, { status: response.status })
      }
      return response
    }
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return request => {
    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request)
    let url = new URL(defaultAssetKey.url)

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/')

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey)
  }
}