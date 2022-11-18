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
                <a className="underline-effect" href='https://www.linkedin.com/in/jonty-sachdeva-20001b149/' target="_blank">LinkedIn</a>,&nbsp;
                <a className="underline-effect" href='https://www.instagram.com/jontysachdevaa/' target="_blank">Instagram</a>,&nbsp;
                <a className="underline-effect" href='https://github.com/jontysachdeva10' target="_blank">Github</a>
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