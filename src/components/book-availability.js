import React from "react"
import Img from "./image-transform"
// import Book from "../components/book"

const BookAvail = ({ BookAvailData }) => (
  <div className="book-availability-layout">
    <div className="container">
        <h2 className="heading-md">{BookAvailData.title}</h2>
        
        <div className="book-overflow-sm">
            <div className="book-wrapper">
                {
                    BookAvailData.books.map((item, i) => {
                        return(
                            <div className="book" key={i}>
                                <Img filename={item.ProductImage} className="book-illustration" title={item.ProductTitle} alt={item.ProductImageName}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  </div>
)

export default BookAvail
