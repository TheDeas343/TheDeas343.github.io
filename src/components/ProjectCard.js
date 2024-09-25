import { Carousel, Button } from 'react-bootstrap';
import "../styles/ProjectCard.css";

export const ProjectCard = ({ title, description, technologies, imgUrls, siteUrl, repoUrl }) => {
  return (
    <div className="proj-div">
      <section className="proj-card">

        <section className="proj-image">
          <Carousel interval={null}>
            {imgUrls.map((url, index) => (
              <Carousel.Item key={index}>
                <img className="rounded-img" src={url} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </section>

        <div className="proj-description">

          <div className="proj-title">
            <h4>{title}</h4>
          </div>

       
          <div className="proj-description-text">
            <span>{description}</span>
          </div>

          <div className="proj-technologies">
          <span>
            <strong>Tecnologies:</strong> {technologies}
           </span>
          </div>

          <div className = "div-button">
            <div className="proj-btns">
            <Button className="project-button white-btn" href={siteUrl} target="_blank">
              View Project
            </Button>
            <Button className="repository-button black-btn" href={repoUrl} target="_blank">
            <span>{"< Repository />"}</span>
            </Button>
          </div>
          </div>

        </div>
      </section>
    </div>
  );
}
