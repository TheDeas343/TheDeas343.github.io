import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { DrawingsMosaic } from "./DrawingsMosaic";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { applications, games } from "../data/projectsData";
import { drawings } from "../data/DrawingsData";
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
                      <Nav variant="pills" className="nav-pills mb-4 justify-content-center align-items-center" id="pills-tab">
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
                              <Col key={index} xs={12} lg={6}>
                               <ProjectCard {...card} />
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {games.map((card, index) => (
                              <Col key={index} xs={12} lg={6}>
                               <ProjectCard {...card} />
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            <Col size={12}>
                              {drawings.length > 0 ? (
                                <>
                                  <div className="drawings-instruction">
                                    <p className="instruction-text">
                                      Click on any image to view details and learn more about each artwork
                                    </p>
                                  </div>
                                  <DrawingsMosaic drawings={drawings} />
                                </>
                              ) : (
                                <div style={{ padding: '50px', textAlign: 'center' }}>
                                  <h3 style={{ color: 'rgba(255,255,255,0.7)' }}>
                                    {'<Coming soon: This section is still under development. Stay tuned!>'}
                                  </h3>
                                  <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '20px' }}>
                                    Adicione suas imagens na pasta src/assets/drawings para ver o mosaico em ação!
                                  </p>
                                </div>
                              )}
                            </Col>
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
