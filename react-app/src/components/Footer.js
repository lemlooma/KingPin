import React from 'react';
import { useSelector } from 'react-redux'

function Footer() {
    const WIKI_PATH = ''
    const GITHUB_PROFILE_MS = 'https://github.com/nM15-vge'
   
    const github_icon = require('../frontend-assets/github_icon.png')

    const user = useSelector(state => state.session.user);
    // style = {{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }

    let links;
    if (user){
        links = (
            <div className = 'footer-links' style={{'marginLeft':'300px'}}>
                <a className='footer-link' href={WIKI_PATH} style={{ 'paddingRight': '60px' }}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Project Wiki</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_MS}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Lema</p>
            
                </a>
            </div>
        )
    } else {
        links = (
            <div className='flex-container'>
                <a className='footer-link' href={WIKI_PATH} style={{ 'paddingRight': '60px' }}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Wiki</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_MS}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Mauro Sanchez</p>
                </a>
               
            </div>
        )
    }

    return (
        <nav>
            {links}
        </nav>
    );
}

export default Footer;
