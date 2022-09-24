import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
              publicURL
            }
          }
        }
      }
    `}
    

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.sizes;

      return (
        <Img
          alt={props.alt}
          title={props.title}
          sizes={imageSizes}
          className={props.className}
        />
      );
    }}
  />
)

export default Image