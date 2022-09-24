import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Banner from "../components/banner"
import Phrasebook from "../components/phraseBook"
import Layout from "../components/layout"
import BookAvailability from "../components/book-availability"

const bannerContent = {
  heading1: "A foreign language",
  heading2: "phrasebook in your messenger",
  bodyText: [
    {
      text: "With over 3,000 words and phrases organized by activity, you will find the essential vocabulary you need to communicate effectively."
    },
    {
      text: "Confidently navigate talking to people, eating out, shopping, getting directions, and many other common situations facing tourists and visitors."
    }
  ],
  cardContent: [
    {
      time: '10:40',
      chat: 'Hi Mary! What German vocabulary can I find for you?'
    },
    {
      time: '10:41',
      chat: 'How do I ask where the nearest train station is?'
    },
    {
      time: '10:41',
      chat: 'Play the video to hear the pronunciation!',
      hasFile: true,
      fileName: "Wo ist der nächste Bahnhof ?",
    },
    {
      time: '10:43',
      chat: 'Thanks!!!'
    }
  ],
  iconsContent: {
    pathColor: "white",
    
    facebook: true,
    facebookUrl: '#subscribe',

    telegram: true,
    telegramUrl: "#subscribe",

    phone: true,
    phoneNumber: "#subscribe",

    watapps: true,
    watsappUrl: "#subscribe",
  }
}

const phraseBookContent = {
  title: 'Hear every word and phrase you read',
  text: [
    {
      paragraph: "Learning a new language requires more than just reading. Print or eBook, your phrasebook connects to JangoBot using the messenger program you already use. "
    },
    {
      paragraph: "JangoBot will play native speaker recordings of every word and phrase in your book - on demand. By listening and reading, you'll retain more and speak with a proper accent."
    }
  ]
}

const bookContent = {
  title: "Phrasebooks available for 30 different languages",
  books: [
    {
      ProductImage: "langojango-french-language-phrasebook.png",
      ProductTitle: "French Phrasebook",
      ProductImageName: 'langojango-french-language-phrasebook'
    },
    {
      ProductImage: "langojango-spanish-language-phrasebook.png",
      ProductTitle: "Spanish Phrasebook",
      ProductImageName:'langojango-spanish-language-phrasebook'
    },
    {
      ProductImage: "langojango-mandarin-language-phrasebook.png",
      ProductTitle: "Mandarin Phrasebook",
      ProductImageName:'langojango-mandarin-language-phrasebook'
    },
  ]
}

const IndexPage = () => (

  <Layout>
    <GatsbySeo
      title='LangoJango - Foreign Language Phrasebooks and Dictionaries'
      description='Looking to learn essential vocabulary and phrases in a foreign language? Langojango phrasebooks and dictionaries were created by native speakers. Hear native speaker recordings of every word and phrase in your phrasebook, on demand, so that you learn to speak a new language with the proper accent.'
      canonical='https://www.langojango.com/'
    />
    
    <div className="homepage">
      <Banner bannerData={bannerContent}/>
      <Phrasebook bookData={phraseBookContent} />
      <BookAvailability BookAvailData={bookContent} />
    </div>
    
  </Layout>
)

export default IndexPage
