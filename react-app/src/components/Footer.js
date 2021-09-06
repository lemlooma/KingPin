import React from 'react';
import { useSelector } from 'react-redux'

function Footer() {
    const REPO_PATH = "https://github.com/lemlooma/KingPin";
    const LINKED_PROFILE =
      "https://www.linkedin.com/in/lema-el-sherbiny-b41340193/";
   


    const user = useSelector(state => state.session.user);
    // style = {{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }

    let links;
    if (user){
        links = (
            <div className = 'footer-links' style={{'marginLeft':'300px'}}>
                <a className='footer-link' href={REPO_PATH} style={{ 'paddingRight': '60px' }}>
                   
                    <p>Github : King Pin Repo</p>
                </a>
                <a className='footer-link' href={LINKED_PROFILE}>
                    
                    <p>LinkedIn : Lema El-Sherbiny</p>
            
                </a>
            </div>
        )
    } else {
        links = (
          <div className="flex-container">
            <a
              className="footer-link"
              href={REPO_PATH}
              style={{ paddingRight: "60px" }}
            >
              <p>Github : King Pin Repo</p>
            </a>
            <a className="footer-link" href={LINKED_PROFILE}>
              <p>LinkedIn : Lema El-Sherbiny</p>
            </a>
          </div>
        );
    }

    return (
        <nav>
            {links}
        </nav>
    );
}

export default Footer;
