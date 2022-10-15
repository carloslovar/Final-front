import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Nuestros servicios</h2>
                        <p>Brindamos valor en cualquier etapa del proceso, desde la ideación creativa hasta la entrega de contenido.<br></br> Unimos marcas y cultura, reinventando la representación.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Propuesta de Valor</h5>
                                <p>Brindamos valor en cualquier etapa del proceso, desde la ideación creativa hasta la entrega de contenido.<br></br> Unimos marcas y cultura, reinventando la representación.</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Idea creativa</h5>
                                <p>Creemos que las mejores piezas de contenido atraen la atención, interactúan cuidadosamente y conducen a la conversión. Nuestro propósito es aprovechar el poder de la narración a través de formatos y plataformas para construir una conexión auténtica entre las marcas y las audiencias.</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Diseño de logo</h5>
                                <p>Activos fotográficos de eventos, retratos o productos de alta calidad entregados a velocidades rápidas para publicación en tiempo real cuando el contenido es más relevante.</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Identidad de la marca</h5>
                                <p>A medida que evolucionan las tendencias de contenido, diseñamos y creamos formatos únicos que interrumpen el feed y son específicos para cada plataforma.</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Desarrollo web</h5>
                                <p>El contenido interactivos brinda a la audiencia una relación más profunda con su marca mientras crean contenido generado por el usuario y un alcance adicional entre las audiencias.</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Producción de video</h5>
                                <p>Los videos de marca invitan al público a una experiencia narrativa más profunda.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}