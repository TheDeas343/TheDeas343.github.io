import { Container, Row, Col } from "react-bootstrap";
import { SiGithubpages } from "react-icons/si";
import linkedin from '../assets/img/linkedin_logo.svg';
import instagram from '../assets/img/instagram_logo.svg';
import itchio from '../assets/img/itchio_logo.svg';
import github from '../assets/img/github_logo.svg';

import '../styles/Footer.css';

function Footer(){
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <SiGithubpages style={{ fontSize: '200px' }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/andreas-cisi-ramos/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/TheDeas343" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
            <a href="https://the-deas.itch.io/" target="_blank" rel="noopener noreferrer"><img src={itchio} alt="Itch.io" /></a>
            <a href="https://www.instagram.com/the_deas_/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
              
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


export default Footer;
