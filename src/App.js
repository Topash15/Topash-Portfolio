import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Resume from './pages/Resume'

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
        return <About currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
  };


  return (
    <div className="App">
      <div id = "body">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main>
        {renderPage(currentPage)}
      </main>
      </div>
    </div>
  );
}

export default App;
