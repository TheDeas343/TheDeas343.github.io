import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assets/img/linkedin_logo.svg';
import instagram from '../assets/img/instagram_logo.svg';
import itchio from '../assets/img/itchio_logo.svg';
import github from '../assets/img/github_logo.svg';
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="div-nav">
      <Navbar expand="lg" className="navbar">
        <Container>
        <Nav className="me-auto">
                <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>

            </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="navbar-text-left">
              <Nav className="me-auto">
                <Nav.Link href="#about" className='navbar-link'>About</Nav.Link>
                <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
                <Nav.Link href="#contact" className='navbar-link'>Contact</Nav.Link>
              </Nav>
            </div>

            <span className="navbar-text-right">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/andreas-cisi-ramos/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="https://github.com/TheDeas343" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
                <a href="https://the-deas.itch.io/" target="_blank" rel="noopener noreferrer"><img src={itchio} alt="Itch.io" /></a>
                <a href="https://www.instagram.com/the_deas_/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
