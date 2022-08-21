import React from 'react';
import gitHubImage from '../../assets/small/GitHub-Mark-32px.png';
import linkedInImage from '../../assets/small/Link_in_icon.png';
import {FaEnvelope} from 'react-icons/fa';
import {FaWix} from 'react-icons/fa';

function Footer(){
    return (
        <footer className = "text-center text-lg-start bg-light text-muted d-flex justify-content-center">
                <div className = "footer-icon m-2">
                    <a href = "https://github.com/va-lopez"><img src ={gitHubImage}/></a>
                </div>
                <div className = "footer-icon m-2">
                    <a href = "https://www.linkedin.com/in/valerie-aleida-lopez/"><img src = {linkedInImage}/></a>
                </div>
                <div className = "footer-icon m-2">
                    <a href = "mailto:valerie.aleida.lopez@gmail.com"><FaEnvelope size={30}/></a>
                </div>
                <div className = "footer-icon m-2">
                    <a href = "https://valerie-a-lopez.wixsite.com/home"><FaWix size={30}/></a>
                </div>
        </footer>
    );
}

export default Footer;