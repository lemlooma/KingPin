import React from 'react';
import { useSelector } from 'react-redux'

function Footer() {
    const WIKI_PATH = "https://github.com/lemlooma/KingPin/wiki";
    const GITHUB_PROFILE = "https://github.com/lemlooma";
   


    const user = useSelector(state => state.session.user);
    // style = {{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }

    let links;
    if (user){
        links = (
            <div className = 'footer-links' style={{'marginLeft':'300px'}}>
                <a className='footer-link' href={WIKI_PATH} style={{ 'paddingRight': '60px' }}>
                   
                    <p>Project Wiki</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE}>
                    
                    <p>Lema El-Sherbiny</p>
            
                </a>
            </div>
        )
    } else {
        links = (
            <div className='flex-container'>
                <a className='footer-link' href={WIKI_PATH} style={{ 'paddingRight': '60px' }}>
                   
                    <p>Wiki</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE}>
                    <p>Lema El-Sherbiny</p>
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
