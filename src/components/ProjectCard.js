import { Col, Row, Button } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    
      <div className = "proj-div">
        <section className="proj-card" >

          <section className ="proj-image">
            <div className="proj-image">
                  <img src={imgUrl} alt={`${title} image`} />
            </div>
          </section>

          <div className = "proj-description">
            <div className="proj-txtx">
                  <h4>{title}</h4>
                  <span>{description}</span>
                </div>
                <div className="proj-btns">
                  <Button variant="primary" href="https://www.disneyplus.com/pt-br/play/25b25b2f-9f80-4ce4-9036-8e8691e8cf24?distributionPartner=google" target="_blank">
                    Site
                  </Button>
                  <Button variant="secondary" href="" target="_blank">
                    Repositório
                  </Button>
              </div>
          </div>

        </section>
    </div>
    
  );
}
