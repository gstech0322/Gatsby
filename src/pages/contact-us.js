import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from "../components/layout"

const contactData = {
    title: "Contact Us",
    subHeading: "We would love to hear from you with any question or comments about our forthcoming phrasebooks. We will respond to your message promptly."
}

const ContactPage = () => (
  <Layout>
    <GatsbySeo
      title='Contact Us | Langojango'
      description='Have a question, comment or concern about soon to be launched Langojango foreign language phrasebooks? Please send us a message.'
      canonical='https://www.langojango.com/contact-us'
    />
    <div className="contactpage">
        <div className="container">
            <h1 className="heading-lg">{contactData.title}</h1>
            <p className="text-sm">{contactData.subHeading}</p>
            <form className="contact-us" 
                method="POST" 
                action="https://api.formcake.com/api/form/ef48e436-4ee1-4b8e-986f-897fa58b09e1/submission"
                // action="https://api.formcake.com/api/form/2d3696ab-7f56-46c3-867c-b4d81041ed55/submission"
            >
                <label>
                    Enter Your Name
                    <input type="text" name="Name" className="text-thin input-field" placeholder="Name" required/>
                </label>
                <label>
                    Enter Your Email
                    <input type="email" name="Email" className="text-thin input-field" placeholder="Email" required/>
                </label>
                <label>
                    Comments
                    <textarea name="Comments" className="text-thin input-field" placeholder="Comments" required/>
                </label>
                <button type="submit" className="btn-green text-sm">Submit</button>
            </form>
        </div>
    </div>
  </Layout>
)

export default ContactPage
