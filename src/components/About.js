import Nav from 'react-bootstrap/Nav';
import "../styles/About.css";
import myPhoto from '../assets/img/my-photo.jpg';

function About() {

  const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();


  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
  };

  const birthDate = '2003-02-14'; 
  const age = calculateAge(birthDate);

  return (
    <div className="div-abouts" id="about">
      <section className="about">
          <div className="foto-bx">
            <img src={myPhoto} alt="Andreas Cisi Ramos" className="foto" />
          </div>

          <div className="about-bx">
            <h2>About me</h2>
            <span className="name-about">Andreas Cisi Ramos ({age})</span>
            <span> Bachelor's Degree in Computer Engineering at UNICAMP (2021-2025)</span>
            <p>My journey in computing began with a fascination for the exact sciences, which led me to participate in and win multiple medals in academic Olympiads. From an early age, my curiosity and passion for computers and games guided me toward the world of technology. I aim to combine my technical skills and years of experience with my creativity, imagination, and artistic abilities to solve problems, create applications and games, and enjoy the process along the way. </p>             
            <Nav>
              <Nav.Link href="#contact" className="contact-button">Contact Me</Nav.Link>
            </Nav>
          </div>
      </section>
    </div>
  );
}

export default About;
