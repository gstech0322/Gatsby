require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// import {GATSBY_ALGOLIA_APP_ID } from '../utils/keys'
// import {GATSBY_ALGOLIA_SEARCH_KEY } from '../utils/keys'
// import {GATSBY_ALGOLIA_ADMIN_KEY } from '../utils/keys'
// import {GATSBY_ALGOLIA_APP_ID } from '../utils/keys'


const config = require('./src/utils/keys');

module.exports = {
  pathPrefix: "/langojango",
  siteMetadata: {
    title: `langojango`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.langojango.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    // `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/product`,
        name: 'product markdown',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-next-seo',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Langojango.com`,
        short_name: `Langojango`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        customDomain: `plausible.langojango.com`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: config.GATSBY_ALGOLIA_APP_ID,
        apiKey: config.GATSBY_ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.langojango.com',
        sitemap: 'https://www.langojango.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.langojango.com', 
        custom: `
        <IfModule mod_expires.c>
          ExpiresActive On
        
          # Images
          ExpiresByType image/jpeg "access plus 1 year"
          ExpiresByType image/gif "access plus 1 year"
          ExpiresByType image/png "access plus 1 year"
          ExpiresByType image/webp "access plus 1 year"
          ExpiresByType image/svg+xml "access plus 1 year"
          ExpiresByType image/x-icon "access plus 1 year"
      
        </IfModule>
        `,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          // globPatterns: ['**/*.{js,jpg,webp,png,html,css}'],
          importWorkboxFrom: `cdn`,
        },
        runtimeCaching: [
          {
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `CacheFirst`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `StaleWhileRevalidate`,
          },
        ]
      },
    },
  ],
}
