import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import Img from "./image-transform"

const CategoryMenu = () => {
  const data = useStaticQuery(graphql`
    query {
        data: allMarkdownRemark {
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
    }
  `)

  const categoryList = data.data.edges

  return (
    <>
      <div className="default-search">
        {categoryList.map(cat => {
          const path = cat.node.frontmatter.path
          return (
            <div className="default-view">
              <Link
                to={path}
                className="default-view-control text-xs"
              >
                <div className="list-category">
                  <span className="list-item">
                    <p className="list-item-title">{cat.node.frontmatter.title}</p>
                    <p className="list-item-text">{cat.node.frontmatter.seoDescription}</p>
                  </span>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CategoryMenu
