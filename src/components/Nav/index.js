import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({currentPage, handlePageChange}) {

  return (
    <header className = "w-100 d-inline-flex flex-row" id="nav">
      <h1>Valerie Lopez</h1>
      <nav className = "w-100" id="nav">
          <ul className = "flex-row ">
            <li className = "nav-item">
              <a href = "#about_Me"
              onClick ={() => handlePageChange('About')}
              className = {currentPage === 'About' ? 'navActive' : 'nav-link'}
              >
                Home
              </a>
            </li>

            <li className = "nav-item">
              <a href = "#portfolio"
              onClick ={() => handlePageChange('Portfolio')}
              className = {currentPage === 'Portfolio' ? 'navActive'  : 'nav-link'}
              >
                Portfolio
              </a>
            </li>

            <li className = "nav-item">
              <a href = "#resume"
              onClick ={() => handlePageChange('Resume')}
              className = {currentPage === 'Resume' ? 'navActive' : 'nav-link'}
              >
                Resume
              </a>
            </li>

            <li className = "nav-item">
              <a href = "#contact"
              onClick ={() => handlePageChange('Contact')}
              className = {currentPage === 'Contact' ? 'navActive' : 'nav-link'}
              >
                Contact
              </a>
            </li>

          </ul>
      </nav>
    </header>
  );
}

export default Nav;