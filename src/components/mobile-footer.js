import React from "react"
import { Link } from "gatsby"
import Img from "./image-transform"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const footerLogo = {
  image: 'Logo-white.png',
  alt: "langojango logo"
}

const MobileFooter = () => (
  <footer className="footer">
    <div className="container">
      <Link to="/" className="footer-logo">
        <Img 
          filename={footerLogo.image} 
          className="logo" 
          title={footerLogo.alt}
          alt={footerLogo.alt}/>
      </Link>
      <ul className="social-media">
        <li className="social-media-item">
          <a href="https://www.instagram.com/hellolangojango">
            <img
              src={require("../assets/svg/instagram.svg")}
              className="logo"
              title="instagram logo"
              alt="instagram logo"
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
      <div className="accordion-wrapper">
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>European Languages</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="links">
                <li>
                  <Link to="/product/bulgarian-phrasebook-and-dictionary">Bulgarian</Link>
                </li>
                <li>
                  <Link to="/product/croatian-phrasebook-and-dictionary">Croatian</Link>
                </li>
                <li>
                  <Link to="/product/czech-phrasebook-and-dictionary">Czech</Link>
                </li>
                <li>
                  <Link to="/product/finnish-phrasebook-and-dictionary">Finnish</Link>
                </li>
                <li>
                  <Link to="/product/french-phrasebook-and-dictionary">French</Link>
                </li>
                <li>
                  <Link to="/product/german-phrasebook-and-dictionary">German</Link>
                </li>
                <li>
                  <Link to="/product/hungarian-phrasebook-and-dictionary">Hungarian</Link>
                </li>
                <li>
                  <Link to="/product/italian-phrasebook-and-dictionary">Italian</Link>
                </li>
                <li>
                  <Link to="/product/polish-phrasebook-and-dictionary">Polish</Link>
                </li>
                <li>
                  <Link to="/product/russian-phrasebook-and-dictionary">Russian</Link>
                </li>
                <li>
                  <Link to="/product/serbian-phrasebook-and-dictionary">Serbian</Link>
                </li>
                <li>
                  <Link to="/product/swedish-phrasebook-and-dictionary">Swedish</Link>
                </li>
                <li>
                  <Link to="/product/turkish-phrasebook-and-dictionary">Turkish</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Asian Languages</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="links">
                <li>
                  <Link to="/product/cantonese-phrasebook-and-dictionary">Cantonese</Link>
                </li>
                <li>
                  <Link to="/product/mandarin-phrasebook-and-dictionary">Mandarin</Link>
                </li>
                <li>
                  <Link to="/product/khmer-phrasebook-and-dictionary">Khmer</Link>
                </li>
                <li>
                  <Link to="/product/korean-phrasebook-and-dictionary">Korean</Link>
                </li>
                <li>
                  <Link to="/product/tagalog-phrasebook-and-dictionary">Tagalog</Link>
                </li>
                <li>
                  <Link to="/product/thai-phrasebook-and-dictionary">Thai</Link>
                </li>
                <li>
                  <Link to="/product/vietnamese-phrasebook-and-dictionary">Vietnamese</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>African Languages</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="links">
                <li>
                  <Link to="/product/amharic-phrasebook-and-dictionary">Amharic</Link>
                </li>
                <li>
                  <Link to="/product/igbo-phrasebook-and-dictionary">Igbo</Link>
                </li>
                <li>
                  <Link to="/product/lugandan-phrasebook-and-dictionary">Lugandan</Link>
                </li>
                <li>
                  <Link to="/product/swahili-phrasebook-and-dictionary">Swahili</Link>
                </li>
                <li>
                  <Link to="/product/twi-phrasebook-and-dictionary">Twi</Link>
                </li>
                <li>
                  <Link to="/product/yoruba-phrasebook-and-dictionary">Yoruba</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                South American Languages
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="links">
                <li>
                  <Link to="/product/portuguese-phrasebook-and-dictionary">Portuguese (Brazilian)</Link>
                </li>
                <li>
                  <Link to="/product/spanish-phrasebook-and-dictionary">Spanish</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Middle Eastern Languages
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="links">
                <li>
                  <Link to="/product/arabic-phrasebook-and-dictionary">Arabic</Link>
                </li>
                <li>
                  <Link to="/product/hebrew-phrasebook-and-dictionary">Hebrew</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <ul className="pages-link-wrapper">
        <li>
          <Link to="/about-us" className="page-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="page-link">
            Privacy Policy
          </Link>
        </li>
        <li>
        <Link to="/contact-us" className="page-link">
          Contact Us
        </Link>
        </li>
        <li>
          <Link to="/terms-of-service" className="page-link">
            Terms of Service
          </Link>
        </li>
      </ul>
      <p className="copyright">&#169;2020</p>
    </div>
  </footer>
)

export default MobileFooter