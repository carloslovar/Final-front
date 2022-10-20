import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dog1.png";
import projImg2 from "../assets/img/medico1.png";
import projImg3 from "../assets/img/planes1.png";
import projImg4 from "../assets/img/proyecto1.png";
import projImg5 from "../assets/img/proyecto5.png";
import projImg6 from "../assets/img/proyecto6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Entrevista",
      description: "Kiara Escobar Sousa. Directora del albergue -Adogtados- en Ventanilla : Adogtados nace en plena pandemia. Antes de la pandemia era solo una idea y durante la pandemia nos armamos de valor aún en una situación bastante difícil. Tenemos un albergue físico en Ventanilla, es un local chico de 100 metros cuadrados. Lo alquilamos. El local es de uno de los voluntarios del equipo de Adogtados. ",
      
      imgUrl: projImg1,
    },
    {
      title: "Especialista",
      description: "Médica veterinaria Milagros Peñafiel, detalló que los riesgos no solo están en los perros abandonados, sino, en general. Esto afecta directamente a la salud pública. Las  campañas de esterilización van a ayudar a tener un control sobre los animales así  mismo el maltrato que no se disipen tanto las enfermedades, señaló la especialista..",
      imgUrl: projImg2,
    },
    {
      title: "Propuestas municipales",
      description: "El análisis de los más de 43 distritos en Lima nos ha demostrado que, a pesar de ser territorios conocidos como clase alta, algunos no apuestan por el bienestar de los animales domésticos..",
      imgUrl: projImg3,
    },
    // {
    //   title: "LANZAMIENTO",
    //   description: " La agencia HYFN se asoció con Spotify para crear activos sociales para apoyar el debut del segundo álbum en solitario de Bad Bunny, 'YHLQMDLG'. ",
    //   imgUrl: projImg4,
    // },
    // {
    //   title: "SOCIAL",
    //   description: "Trabajamos para crear un cortometraje que apoye el lanzamiento del movimiento destinado a crear conversación y desafiar los estereotipos culturales.",
    //   imgUrl: projImg5,
    // },
    // {
    //   title: "PROMOCIÓN",
    //   description: "Documentamos y creamos todo el contenido social de videos y fotos para la celebración de lanzamientos de álbumes musicales.",
    //   imgUrl: projImg6,
    // },
  
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                <h2>Veterinarias municipales, parques con zonas especiales para perros y campañas de vacunación, son algunas de las propuestas comunes. </h2>
                <h3>Especialista señala la necesidad de controlar enfermedades por riesgos para la salud pública.</h3>
                <p>Absol estaba casi muerto, solo estaba. Deambulaba por las calles bajo el frío, cubierto por las heridas que relucían a lo lejos en su piel. Él,como todo perro callejero, era ignorado por los peatones de una Lima indiferente a su prójimo, hasta el perruno. Todo cambió cuando Sthefany lo vio y nació algo en ella que la motivó a salvarlo. Lo que comenzó como un perro sin pelo y casi moribundo, abandonado a su suerte, ahora es uno de los que más pelo tiene. Su rescatista no recuerda en qué momento exacto mejoró tanto. La historia no termina ahí. 

La lucha que libró Absol no solo fue contra la irremediable muerte en situación de calle, sino, su rescatista también tuvo que batallar contra la expulsión en su propio barrio cuando tomó un local comunal para improvisar un refugio y sus vecinos terminaron por negarle el apoyo. Sthefany no se rindió, no sólo debía salvar a Absol, sino también a más perritos que habían llegado. 

Un terreno de su madre en Ventanilla fue la salvación. Actualmente 13 peludos viven ahí y ella los cuida con mucho amor, los alimenta y los da en adopción. “La mayoría -de cachorros- son adoptados porque son chiquitos o porque son blancos. Hay racismo con los perros. A pesar que se ven cachorros, los primeros que sale son  los blancos o mostazas y los últimos son los negros. Creo que lo hacen  inconscientemente, un racismo silencioso”, dijo. 

Se estima  que en Lima existen más de 4 millones de perros equivalente a un perro abandonado  por cada tres limeños, la principal causa del abandono de los perros es la falta de  esterilización y la nula concienciación sobre los peligros que podrían traer en la  salud pública. 

Este Medio conversó con la médica veterinaria Milagros Peñafiel, quien detalló que los riesgos no solo están en los perros abandonados, sino, en general. Esto afecta directamente a la salud pública. "Las  campañas de esterilización van a ayudar a tener un control sobre los animales así  mismo el maltrato que no se disipen tanto las enfermedades”, señaló la especialista. </p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Acciones inmediatas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Propuestas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Conclusión</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <Tab.Pane eventKey="first">
                      <p>Tan solo el 50% de los virtuales alcaldes de los 43 distritos de Lima cuentan con propuestas a favor de las mascotas domésticas. Pueblo Libre, San Miguel y La Victoria son algunos de los distritos que podrán ver cómo se vuelve realidad la promesa de una veterinaria municipal donde podrán atender a sus mascotas todos los vecinos. Cabe resaltar que algunas jurisdicciones ya cuentan con centros de salud comunitarios donde hay apartados para animales domésticos; sin embargo, no se dan a basto. </p>
                      
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
                      <p>El virtual alcalde de Comas, Ulises Villegas Rojas de Somos Perú ha propuesto fomentar un Parque de los perros con un espacio ideal para entrenamiento para las mascotas debidamente acondicionado. Además, implementará la Veterinaria Municipal.
Por otro lado, Breña, Carabayllo, Lurigancho, Pachacamac, Pucusana, Punta Hermosa, San Isidro, Rímac, Santiago de Surco y otras siete jurisdicciones municipales de la capital no cuentan con propuestas a favor de los perros y gatos del distrito. 
 </p>
                      
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
                      <p>El análisis de los más de 43 distritos en Lima nos ha demostrado que, a pesar de ser territorios conocidos como clase alta, algunos no apuestan por el bienestar de los animales domésticos. </p>
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