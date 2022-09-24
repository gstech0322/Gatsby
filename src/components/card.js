import React from "react"
import classnames from 'classnames'

const Cards = ({ cardData }) => (
  <div className="card-layout">
    {
      cardData.cardContent.map((item, i) => {
        return(
        <div className={classnames("card-item", {
          "card-embedded-file": item.hasFile === true
        })} key={i}>
          <p className="time">{item.time}</p>
          <p>{item.chat}</p>

          {
            item.hasFile ?         
            <div className="card-video shadow-dark">
              <img src={require('../images/icon-play.svg')} alt="icon" title="icon"/>
              <p>{item.fileName}</p> 
          </div> : ''
          }
        </div>
        )
      })
    }
  </div>
)

export default Cards
