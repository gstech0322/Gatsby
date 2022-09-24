import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import {Link} from 'gatsby'

import Layout from "../components/layout"

const termData = {
    title: "About Us",
    content: [
        {
            title: "We're just getting started.",
            content: [
                {
                    text: "At LangoJango, located in British Columbia, Canada, we are working to create innovative language learning experiences that will stimulate people around the world to learn new languages ."
                },
                {
                    text: <>We're currently seeking experienced foreign language educators to collaborate with us on our phrasebook content. If that is you, please <Link to="/contact-us">contact us</Link>.</>
                }
            ]
        }
    ]
}

const TermsPage = () => (
  <Layout>
    <GatsbySeo
      title='About Us | Langojango'
      description='When searching for a foreign language phrasebook, choose the option that will help you learn proper pronunciation provided by native speakers. Learn how Langojango can help you in your language learning endeavours.'
      canonical='https://www.langojango.com/about-us'
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
