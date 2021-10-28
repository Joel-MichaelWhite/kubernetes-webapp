import React from 'react';
import './navbar.css'
import capybara from '../assets/capybara-nav-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return (
        <div className="nav-container">
            <img className="nav-logo" src={capybara}></img>
            {/* <div className="nav-links-container"> */}
                <ul className="nav-links-container">
                    <FontAwesomeIcon className="menu-icon" icon={faBars} />
                    <li className="nav-link"><a href=""></a>Meet Capybara</li>
                    <li className="nav-link"><a href=""></a>About Capybara</li>
                    <li className="nav-link"><a href=""></a>Capybara Facts</li>
                    <li className="nav-link"><a href=""></a>Pet Capybara</li>
                    <li className="nav-link"><a href=""></a>Funny Video</li>
                </ul>
            {/* </div> */}
        </div>
    )
}
export default Navbar;