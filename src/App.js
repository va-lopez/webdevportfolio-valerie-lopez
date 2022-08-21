import React, {useState} from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function checkPage(currentPage){
  return `<${currentPage.name}></${currentPage.name}>`
}

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  //conditionally rendering pages
  const renderPage = () => {
    if(currentPage === 'Contact'){
      return <Contact/>
    }
    if(currentPage === 'Portfolio'){
      return <Portfolio/>
    }
    if(currentPage === 'Resume'){
      return <Resume/>
    }
    return <About/>
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
        <Navigation
        currentPage = {currentPage}
        handlePageChange ={handlePageChange}
        />
        {renderPage()}
        <Footer/>
      </div>
  );
}

export default App;
