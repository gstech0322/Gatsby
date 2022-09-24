const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `content`
const indexName = `Pages`
const pageQuery = `{
  data: allMarkdownRemark (
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ){
    edges {
      node {
        id
        frontmatter {
          setID
          path
          language
          productImage
          bookCoverImage
          altText
          title
          seoDescription
          description {
            text
          }
        }
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.data.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries