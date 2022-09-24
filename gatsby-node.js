const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const productTemplate = path.resolve(`src/templates/productTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: productTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}