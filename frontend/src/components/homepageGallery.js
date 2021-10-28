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
      <div className="gallery-img-container">
        <img className="capybara-with-monkey-img" src={capybaraMonkey}></img>
      </div>
      <div className="gallery-img-container">
        <img className="gallery-img" src={capybaraSons}></img>
      </div>
      <div className="gallery-img-container">
        <img className="gallery-img" src={capybaraCitrus}></img>
      </div>
      <div className="gallery-img-container">
        <img className="gallery-img" src={capybaraShower}></img>
      </div>
      <div className="gallery-img-container">
        <img className="gallery-img" src={capybaraSwamp}></img>
      </div>
      <div className="gallery-img-container">
        <img className="gallery-img" src={capybaraCroc}></img>
      </div>
  </div>
  )
}