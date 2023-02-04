import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselHome = () => {
  return (
    <div className="container  ">
      <div className="carouselBox p-5 text-center lead">
        <Carousel fade indicators={false} controls={false} interval={6000}>
          <Carousel.Item>
            <p>
              “Meditazione vuol dire mettere la mente in disparte, così che non
              interferisca più con la realtà e tu possa vedere le cose per ciò
              che sono.”
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              “La meditazione non consiste nel fermare i nostri pensieri, ma nel
              prendere consapevolezza che siamo molto più di soli pensieri e
              sentimenti.”
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              “L’atteggiamento essenziale per una corretta meditazione è quello
              di mettersi in ascolto.”
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              “Se fai anche solo una meditazione vera sai per sempre che non
              esiste preoccupazione o inquietudine mentale.”
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              “Quando inspiri, torni a te stesso. Quando espiri rilasci ogni
              tensione.”
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselHome;
