import React from "react"

import Layout from "../components/layout"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

const errorStyle = {
  padding: "100px",
  textAlign: "center",
}

const NotFoundPage = () => (
  <Layout>
    <GatsbySeo
      title='404 | Langojango'
      description='404'
    />
    <div style={errorStyle}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
