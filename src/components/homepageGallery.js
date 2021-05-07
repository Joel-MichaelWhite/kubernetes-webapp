import React from 'react';
import './homepageGallery.css';
import capybaraCroc from '../assets/capybara-and-crocodile.jpg'
import capybaraMonkey from '../assets/capybara-and-monkeys.jpg'
import capybaraSons from '../assets/capybara-and-sons.jpg'
import capybaraCitrus from '../assets/capybara-citrus.jpg'
import capybaraShower from '../assets/capybara-shower.jpg'
import capybaraSwamp from '../assets/capybara-swamp.jpg'
export default function HompageGallery () {
  return (
    <div className="gallery-container">
      <div className="capybara-with-monkey-container">
        <img className="capybara-with-monkey-img" src={capybaraMonkey}></img>
      </div>
      <div className="capybara-with-sons-container">
        <img className="capybara-with-sons-img" src={capybaraSons}></img>
      </div>
      <div className="capybara-with-citrus-container">
        <img className="capybara-with-citrus-img" src={capybaraCitrus}></img>
      </div>
      <div className="capybara-with-shower-container">
        <img className="capybara-with-shower-img" src={capybaraShower}></img>
      </div>
      <div className="capybara-with-swamp-container">
        <img className="capybara-with-swamp-img" src={capybaraCroc}></img>
      </div>
      <div className="capybara-with-crocodile-container">
        <img className="capybara-with-crocodile-img" src={capybaraCroc}></img>
      </div>
  </div>
  )
}