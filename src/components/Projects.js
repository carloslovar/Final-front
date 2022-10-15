import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proyecto2.png";
import projImg2 from "../assets/img/proyecto3.png";
import projImg3 from "../assets/img/proyecto4.png";
import projImg4 from "../assets/img/proyecto1.png";
import projImg5 from "../assets/img/proyecto5.png";
import projImg6 from "../assets/img/proyecto6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MODA",
      description: "Creamos videos que documentaron su experiencia en Moda 2019. Entregamos el contenido en tiempo real mientras ocurría el evento.",
      imgUrl: projImg1,
    },
    {
      title: "MÚSICA",
      description: "Documentamos la fiesta de lanzamiento del álbum denominado Hottie Ranch. Creamos todo el contenido social de videos y fotos, lo entregamos y lo publicamos en las cuentas sociales en tiempo real.",
      imgUrl: projImg2,
    },
    {
      title: "MANEJO COMERCIAL",
      description: "Hemos estado trabajando con nuevos artistas desde el principio de sus carrera, desde documentar los lanzamientos de sus canciones hasta colaboraciones comerciales y charlas TED.",
      imgUrl: projImg3,
    },
    {
      title: "LANZAMIENTO",
      description: " La agencia HYFN se asoció con Spotify para crear activos sociales para apoyar el debut del segundo álbum en solitario de Bad Bunny, 'YHLQMDLG'. ",
      imgUrl: projImg4,
    },
    {
      title: "SOCIAL",
      description: "Trabajamos para crear un cortometraje que apoye el lanzamiento del movimiento destinado a crear conversación y desafiar los estereotipos culturales.",
      imgUrl: projImg5,
    },
    {
      title: "PROMOCIÓN",
      description: "Documentamos y creamos todo el contenido social de videos y fotos para la celebración de lanzamientos de álbumes musicales.",
      imgUrl: projImg6,
    },
  
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                <h2>Proyectos</h2>
                <p>Trabajando con marcas locales, viajamos por todo el Perú y producimos un trabajo increíble. A medida que nos establecemos en la industria, sentimos que hay una oportunidad de usar lo que aprendimos para ayudar a cultivar la diversidad y la inclusión dentro del espacio de medios y contenido. Así que tomamos lo que mejor hacemos, creación de contenido y narración digital, y comenzamos la Agencia HYFN con la visión de construir una comunidad y fortalecer la representación.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Música</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Moda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Empresas</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <Tab.Pane eventKey="first">
                      <p>Hemos colaborado con músicos y cantantes establecidos e independientes en varios proyectos.</p>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nos asociamos con la moda para documentar y crear todo el contenido social de videos y fotos para la celebración de lanzamientos de álbumes, discos y sencillos de artistas.</p>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Creamos videos de marca que muestren el importante trabajo que realizan los artistas junto con las empresas en las comunidades desatendidas como labor social.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}