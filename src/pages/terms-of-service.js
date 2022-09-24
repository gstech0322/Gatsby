import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from "../components/layout"

const termData = {
    title: "Terms of Service",
    content: [
        {
            title: "Welcome to LangoJango!",
            content: [
                {
                    text: "These terms and conditions outline the rules and regulations for the use of LangoJango's Website, located at https://www.langojango.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use LangoJango if you do not agree to take all of the terms and conditions stated on this page. "
                },
                {
                    text: "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 'Client', 'You' and 'Your' refers to you, the person log on this website and compliant to the Company’s terms and conditions. 'The Company', 'Ourselves', 'We', 'Our' and 'Us', refers to our Company. 'Party', 'Parties', or 'Us', refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of British Columbia, Canada. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same."
                }
            ]
        },
        {
            title: "Cookies",
            content: [
                {
                    text: "We employ the use of cookies. By accessing LangoJango, you agreed to use cookies in agreement with the LangoJango's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
                    
                }
            ]
        },
        {
            title: "License",
            content: [
                {
                    text: "Unless otherwise stated, LangoJango and/or its licensors own the intellectual property rights for all material on LangoJango. All intellectual property rights are reserved. You may access this from LangoJango for your own personal use subjected to restrictions set in these terms and conditions. You musth not republish material from LangoJango or otherwise reproduce, duplicate, or copy material from the website."
                }
            ]
        }
    ]
}

const TermsPage = () => (
  <Layout>
    <GatsbySeo
      title='Terms of service | Langojango'
      description='Learn the legal conditions under which LangoJango offers its services at LangoJango.com by reviewing the Terms of Service page.'
      canonical='https://www.langojango.com/terms-of-service'
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
