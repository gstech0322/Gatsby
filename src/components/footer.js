import React from "react"
import { Link } from "gatsby"
import Img from "./image-transform"

const footerLogo = {
  image: 'Logo-white.png',
  alt: "langojango logo"
}

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="custom-row">
        <div className="custom-col">
          <div className="top-content">
            <Link to="/" className="footer-logo">
              <Img 
                filename={footerLogo.image} 
                className="logo" 
                title={footerLogo.alt}
                alt={footerLogo.alt}/>
            </Link>
          </div>
          <p className="copyright">&#169;2020</p>
        </div>

        <div className="custom-col">
          <div className="top-content">
            <h3 className="title">European Languages</h3>
            <ul className="links">
              <li>
                <Link to="/product/bulgarian-phrasebook-and-dictionary">
                  Bulgarian
                </Link>
              </li>
              <li>
                <Link to="/product/croatian-phrasebook-and-dictionary">
                  Croatian
                </Link>
              </li>
              <li>
                <Link to="/product/czech-phrasebook-and-dictionary">Czech</Link>
              </li>
              <li>
                <Link to="/product/finnish-phrasebook-and-dictionary">
                  Finnish
                </Link>
              </li>
              <li>
                <Link to="/product/french-phrasebook-and-dictionary">
                  French
                </Link>
              </li>
              <li>
                <Link to="/product/german-phrasebook-and-dictionary">
                  German
                </Link>
              </li>
              <li>
                <Link to="/product/hungarian-phrasebook-and-dictionary">
                  Hungarian
                </Link>
              </li>
              <li>
                <Link to="/product/italian-phrasebook-and-dictionary">
                  Italian
                </Link>
              </li>
              <li>
                <Link to="/product/polish-phrasebook-and-dictionary">
                  Polish
                </Link>
              </li>
              <li>
                <Link to="/product/russian-phrasebook-and-dictionary">
                  Russian
                </Link>
              </li>
              <li>
                <Link to="/product/serbian-phrasebook-and-dictionary">
                  Serbian
                </Link>
              </li>
              <li>
                <Link to="/product/swedish-phrasebook-and-dictionary">
                  Swedish
                </Link>
              </li>
              <li>
                <Link to="/product/turkish-phrasebook-and-dictionary">
                  Turkish
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/contact-us" className="page-link">
            Contact Us
          </Link>
        </div>

        <div className="custom-col">
          <div className="top-content">
            <h3 className="title">Asian Languages</h3>
            <ul className="links">
              <li>
                <Link to="/product/cantonese-phrasebook-and-dictionary">
                  Cantonese
                </Link>
              </li>
              <li>
                <Link to="/product/mandarin-phrasebook-and-dictionary">
                  Mandarin
                </Link>
              </li>
              <li>
                <Link to="/product/khmer-phrasebook-and-dictionary">Khmer</Link>
              </li>
              <li>
                <Link to="/product/korean-phrasebook-and-dictionary">
                  Korean
                </Link>
              </li>
              <li>
                <Link to="/product/tagalog-phrasebook-and-dictionary">
                  Tagalog
                </Link>
              </li>
              <li>
                <Link to="/product/thai-phrasebook-and-dictionary">Thai</Link>
              </li>
              <li>
                <Link to="/product/vietnamese-phrasebook-and-dictionary">
                  Vietnamese
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/about-us" className="page-link">
            About Us
          </Link>
        </div>

        <div className="custom-col">
          <div className="top-content">
            <h3 className="title">African Languages</h3>
            <ul className="links">
              <li>
                <Link to="/product/amharic-phrasebook-and-dictionary">
                  Amharic
                </Link>
              </li>
              <li>
                <Link to="/product/igbo-phrasebook-and-dictionary">Igbo</Link>
              </li>
              <li>
                <Link to="/product/lugandan-phrasebook-and-dictionary">
                  Lugandan
                </Link>
              </li>
              <li>
                <Link to="/product/swahili-phrasebook-and-dictionary">
                  Swahili
                </Link>
              </li>
              <li>
                <Link to="/product/twi-phrasebook-and-dictionary">Twi</Link>
              </li>
              <li>
                <Link to="/product/yoruba-phrasebook-and-dictionary">
                  Yoruba
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/privacy-policy" className="page-link">
            Privacy Policy
          </Link>
        </div>

        <div className="custom-col">
          <div className="top-content">
            <h3 className="title">South American Languages</h3>
            <ul className="links">
              <li>
                <Link to="/product/portuguese-phrasebook-and-dictionary">
                  Portuguese (Brazilian)
                </Link>
              </li>
              <li>
                <Link to="/product/spanish-phrasebook-and-dictionary">
                  Spanish
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/terms-of-service" className="page-link">
            Terms of Service
          </Link>
        </div>

        <div className="custom-col">
          <div className="top-content">
            <h3 className="title">Middle Eastern Languages</h3>
            <ul className="links">
              <li>
                <Link to="/product/arabic-phrasebook-and-dictionary">
                  Arabic
                </Link>
              </li>
              <li>
                <Link to="/product/hebrew-phrasebook-and-dictionary">
                  Hebrew
                </Link>
              </li>
            </ul>
          </div>
          <ul className="social-media">
            <li className="social-media-item">
              <a href="https://www.instagram.com/hellolangojango">
                <img
                  src={require("../assets/svg/instagram.svg")}
                  className="logo"
                  alt="instagram logo"
                  title="instagram logo"
                />
              </a>
            </li>
            <li className="social-media-item">
              <a href="https://twitter.com/langojango">
                <img
                  src={require("../assets/svg/twitter.svg")}
                  className="logo"
                  alt="twitter logo"
                  title="twitter logo"
                />
              </a>
            </li>
            <li className="social-media-item">
              <a href="https://www.facebook.com/Langojango-580988472576742">
                <img
                  src={require("../assets/svg/facebook.svg")}
                  className="logo"
                  alt="facebook logo"
                  title="facebook logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer