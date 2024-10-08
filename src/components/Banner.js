import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import "../styles/Banner.css"
import TrackVisibility from 'react-on-screen';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Game Developer", "Artist" ];
  const period = 1300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className = "banner-div" id="home">
        <section className="filtro" >
      <div className = "banner">
      <Container>
        
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1><span className="name-banner"> {`Hi! I'm Andreas\n`}</span></h1>
            <div className="rotate-div"><h1><span className="txt-rotate" dataPeriod="1000" data-rotate= '[ "Software Developer", "Game Developer", "Artist" ]'><span className="wrap">{text}</span> </span></h1></div>
          </div>}
        </TrackVisibility>
          
        
      </Container>
      </div>
    </section>
    </div>
  )
}

export default Banner;
