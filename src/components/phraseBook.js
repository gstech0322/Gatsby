import React from "react"
import { Stream } from "@cloudflare/stream-react"

const videoIdOrSignedUrl =
  "https://embed.videodelivery.net/embed/r4xu.fla9.latest.js?video=bc227b933c4c249b328214527a5b57ef"

const phraseBook = ({ bookData }) => (
  <div className="phrasebook-layout">
    <div className="container phrasebook-flex">
      <div className="phrasebook-content video-holder ">
        <Stream
          poster={require("../images/video-thumbnail.png")}
          src="bc227b933c4c249b328214527a5b57ef"
          height="100%"
          width="100%"
          controls
        />
        <script
          data-cfasync="false"
          defer
          type="text/javascript"
          src="https://embed.videodelivery.net/embed/r4xu.fla9.latest.js?video=bc227b933c4c249b328214527a5b57ef"
        />
      </div>

      <div className="phrasebook-content">
        <div className="wrapper">
          <h2 className="heading-md">{bookData.title}</h2>
          {bookData.text.map((item, i) => {
            return (
              <p className="text-md" key={i}>
                {item.paragraph}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

export default phraseBook
