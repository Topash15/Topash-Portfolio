import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from './components/Nav'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import Footer from './components/Footer'
import Resume from './components/pages/Resume'

function App() {
  const [currentPage, handlePageChange] = useState('About Me')

  const renderPage = () => {
    switch (currentPage) {
      case 'My Projects':
        return <Project />;
      case 'Contact Me':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };


  return (
    <div className="App">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
