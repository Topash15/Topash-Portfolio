import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
