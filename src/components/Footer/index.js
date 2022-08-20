import React from 'react';
import gitHubImage from '../../assets/small/GitHub-Mark-32px.png';
import linkedInImage from '../../assets/small/Link_in_icon.png';
import {FaEnvelope} from 'react-icons/fa';

function Footer(){
    return (
        <footer className = "footer">
            <ul className = "flex-row ">
                <li className = "footer-icon">
                    <a href = "https://github.com/va-lopez"><img src ={gitHubImage}/></a>
                </li>
                <li className = "footer-icon">
                    <a href = "https://www.linkedin.com/in/valerie-aleida-lopez/"><img src = {linkedInImage}/></a>
                </li>
                <li className = "footer-icon">
                    <a href = "mailto:valerie.aleida.lopez@gmail.com"><FaEnvelope/></a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;