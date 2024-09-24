import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import imgBase from "../assets/img/imgBase.jpg";
import "../styles/Project.css";

function Projects() {
  const applications = [
    {
      title: "NASA SPACE APPS 2023 - GLOBAL WINNER",
      description: "My tem Greetings from Earth! foi um dos vencedores do maio hackathon do mundo com um projeto interativo utilizando dados da NASA, com componentes de interação como globos, slides, musica e jogo quiz",
      technologies: "React, CSS, Unity, WebGL",
      imgUrls: [imgBase],  // Passando imgUrls como um array
      siteUrl: "https://www.google.com/search?q=superbad",
      repoUrl: "https://www.google.com/search?q=superbad"
    },
    {
      title: "Another Project",
      description: "Another project description",
      technologies: "React",
      imgUrls: [imgBase, imgBase],  // Agora com múltiplas imagens
      siteUrl: "https://www.google.com/search?q=superbad",
      repoUrl: "https://www.google.com/search?q=superbad"
    },
  ];

  return (
    <div className="div-projects" id="projects">
      <section className="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <h2>Projects</h2>
                    <p></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first" id="softwares">Applications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second" id="gamedev">Games</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Drawings</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp">
                        <Tab.Pane eventKey="first">
                          <Row>
                            {applications.map((card, index) => (
                              <Col key={index} sm={12} md={12}>
                               <ProjectCard {...card} />
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {applications.map((card, index) => (
                              <Col key={index} sm={12} md={12}>
                               <ProjectCard {...card} />
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {applications.map((card, index) => (
                              <Col key={index} sm={12} md={12}>
                               <ProjectCard {...card} />
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
