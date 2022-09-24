import React from "react"
import Card from "../components/card"
import Icons from "../components/icon"

const Banner = ({ bannerData }) => (
  <div className="banner-layout">
      <div className="container banner-flex">
        <div className="banner-content">
            <h1 className="heading-lg heading-lg--bold">{bannerData.heading1}</h1>
            <h2 className="heading-lg heading-lg--light">{bannerData.heading2}</h2>
            {
                bannerData.bodyText.map((parag, i) => {
                    return(
                        <p className="text-md" key={i}>{parag.text}</p>
                    )
                })
            }
        </div>

        <div className="banner-content">
            <Card cardData={bannerData} />
        </div>

        <div className="banner-content banner-chat-app">
            <h2 className="heading-md">Start in the chat app you already use</h2>

            <Icons iconValue={bannerData}/>
        </div>
      </div>
  </div>
)

export default Banner
