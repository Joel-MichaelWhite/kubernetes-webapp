import React from 'react'
import './footer.css'
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram} from '@fortawesome/free-brands-svg-icons'
import {  faFacebook} from '@fortawesome/free-brands-svg-icons'
import {  faTwitter} from '@fortawesome/free-brands-svg-icons'
import {  faYoutube} from '@fortawesome/free-brands-svg-icons'
export default function Footer () {
  return (
    <div className="footer-container">
        <div className="social-media-links-container">
            <a href="https://www.instagram.com/explore/tags/capybara/?hl=en">
              <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.facebook.com/CapybaraWorld/">
              <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/hashtag/capybara">
              <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.youtube.com/c/foodwishes">
              <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
            </a>
        </div>
        <div className="other-pages-container">
            <div>contact us</div>
            <div>about us</div>
        </div>
      </div>
  )
}