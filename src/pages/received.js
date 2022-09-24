import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from "../components/layout"

const termData = {
    title: "Submission Received",
    content: [
        {
            title: "Thanks!",
            content: [
                {
                    text: "We have received your submission. We will be in touch shortly."
                }
            ]
        }
    ]
}

const TermsPage = () => (
  <Layout>
    <GatsbySeo
      title='Submission Recieved | Langojango'
      description='We have received your submission.'
      canonical='https://www.langojango.com/received'
    />
    <div className="termpage">
        <div className="container">
            <h1 className="heading-lg">{termData.title}</h1>
            {
                termData.content.map((item, i) => {
                    return(
                        <div className="term-wrapper" key={i}>
                            <h2 key={i} className="heading-sm">{item.title}</h2>
                            {
                                item.content.map((itemTwo, j) => {
                                    return(
                                        <div key={j}>
                                            <p className="text-sm">{itemTwo.text}</p>
                                            {
                                                itemTwo.list ? 
                                                    <ul>
                                                        {
                                                            itemTwo.list.map((itemThree, k) => {
                                                                return(
                                                                    <li key={k}>{itemThree.listData}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul> : ''
                                            }
                                        </ div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
  </Layout>
)

export default TermsPage
