import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div>
                <span>Jonty Sachdeva</span><br/>
                <span>Frontend Developer</span>
            </div>
            <div>
                <span>LinkedIn,&nbsp;</span>
                <span>Instagram,&nbsp;</span>
                <span>Github</span>
            </div>
            <div>
                <span>Built by Jonty Sachdeva</span><br />
                <span>Design inspired from various portfolios</span>
            </div>
        </div>
    </div>
  )
}

export default Footer;