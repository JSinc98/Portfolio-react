import React, { useState } from 'react';
import NavTabs from './navtabs';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';
import './portfoliocontainer.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'projects') {
      return <Projects />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if (currentPage === 'contact')
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolio-container'>
      <h1>Joshua Sinclair</h1>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

