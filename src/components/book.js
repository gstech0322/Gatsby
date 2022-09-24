import React from "react"
import Img from "./image-transform"

// const ProductData = {
//   ProductImage: 'langojango-spanish-language-phrasebook.png',
//   ProductImageName: "langojango-spanish-language-phrasebook"
// }

const Book = ({ title }) => (
  <div className="book">
    {/* {
      title.map((item, i) => {
        return(
          <Img filename={item.ProductImage} className="book-illustration" alt={item.ProductImageName}/>
        )
      })
    } */}
  </div>
)

export default Book
