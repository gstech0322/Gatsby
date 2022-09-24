import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from "../components/layout"

const privacyData = {
    title: "Privacy Policy",
    content: [
        {
            title: "Overview",
            content: [
                {
                    text: "At langojango.com, accessible from https://langojango.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by langojango.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in langojango.com. This policy is not applicable to any information collected offline or via channels other than this website. By using our website, you hereby consent to our Privacy Policy and agree to its terms. "
                },
                {
                    text: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."
                }
            ]
        },
        {
            title: "Cookies and Web Beacons",
            content: [
                {
                    text: "Like any other website, langojango.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
                }  
            ]
        },
        {
            title: "Children's Information",
            content: [
                {
                    text: "langojango.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
                }
            ]
        }
    ]
}

const PrivacyPage = () => (
  <Layout>
    <GatsbySeo
      title='Privacy Policy | Langojango'
      description='Langojango prioritizes your right to privacy and only collects the minimum amount of anonymized data required to effecitvely serve our customers better.'
      canonical='https://www.langojango.com/privacy-policy'
    />
    <div className="termpage">
        <div className="container">
            <h1 className="heading-lg">{privacyData.title}</h1>
            {
                privacyData.content.map((item, i) => {
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

export default PrivacyPage
