import PropTypes from "prop-types"
import React, { useState }from "react"
import classnames from 'classnames'
// import { render } from 'react-dom'
import {Link} from "gatsby"
import Img from "./image-transform"
import {navigate} from 'gatsby'
import AlgoliaSearch from "./algoliaSearch"

const headerLogo = {
  image: 'Logo.png',
  alt: "langojango logo",
}

const Header = ({ siteTitle }) => {
//   const languageForm = useRef(null)

//   const handleClickEvent = () => {
//      const form = languageForm.current
//      const makeLowerCase = (`${form['language'].value}`).toLowerCase();
//      navigate('/product/' + makeLowerCase +'-phrasebook-and-dictionary');
//   }

//   const handleEnterEvent = (event) => {
//     if (event.which=='13' || event.type=='click') {
//       event.preventDefault();
//       const form = languageForm.current
//       const makeLowerCase = (`${form['language'].value}`).toLowerCase();
//       navigate('/product/' + makeLowerCase+'-phrasebook-and-dictionary');
//    }
//  }

  const [ focus, isFocus ] = useState(false)

  const listDropdown = () => {
    isFocus(!focus)
  }

  return(
    <header>
      <div className="container header--flex">
        <Link to="/">
          <Img filename={headerLogo.image} className="img-logo" title={headerLogo.alt} alt={headerLogo.alt}/>
        </Link>

        <div className={classnames("search-holder search--browseDisplay", {
            "is-show": focus
          })}
          onMouseOut={listDropdown}
          onMouseOver={listDropdown}>
          <AlgoliaSearch />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
