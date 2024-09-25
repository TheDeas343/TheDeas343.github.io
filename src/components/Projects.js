import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { applications, games, drawings } from "../data/projectsData"; // Atualize o caminho conforme necessário
import "../styles/Project.css";

function Projects() {
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
                            {games.map((card, index) => (
                              <Col key={index} sm={12} md={12}>
                               <ProjectCard {...card} />
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {drawings.map((card, index) => (
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
