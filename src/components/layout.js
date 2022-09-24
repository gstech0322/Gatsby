/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
// import "typeface-noto-sans"
// import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import MobileFooter from "./mobile-footer"
import Subscribe from "../components/subscribe"

const Layout = ({ children }) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  )
  const breakpoint = 992

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Helmet>
        <html lang="en" />
      </Helmet> */}
      <Header/>
      <main>
        {children}
        <Subscribe />
      </main>
      {width < breakpoint ? <MobileFooter /> : <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
