import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import linkedin from '../assets/img/linkedin_logo.svg';
import instagram from '../assets/img/instagram_logo.svg';
import itchio from '../assets/img/itchio_logo.svg';
import github from '../assets/img/github_logo.svg';

import "../styles/NavBar.css"


function NavBar() {

  return (
    <div className = "div-nav">
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          

          <div className="navbar-text-left">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>
              <Nav.Link href="#skills" className= 'navbar-link'>Skills</Nav.Link>
              <NavDropdown title="Projects" id="dropdown-menu">
                <NavDropdown.Item href="#softwares"  className = 'dropdownItem' >Software Projects</NavDropdown.Item>
                <NavDropdown.Item href="#gamedev"  className = 'dropdownItem' >Game Development</NavDropdown.Item>
                <NavDropdown.Item href="#drawings"  className = 'dropdownItem' >Drawings</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" className='navbar-link'>Contact</Nav.Link>

            </Nav>
          </div>

          <span className="navbar-text-right">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/andreas-cisi-ramos/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                <a href="https://github.com/TheDeas343" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                <a href="https://the-deas.itch.io/" target="_blank" rel="noopener noreferrer"><img src={itchio} alt="" /></a>
                <a href="https://www.instagram.com/the_deas_/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
              </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;