import meter1 from "../assets/img/foto01.png";
import meter2 from "../assets/img/foto02.png";
import meter3 from "../assets/img/foto03.png";
import meter4 from "../assets/img/foto04.png";
import meter5 from "../assets/img/foto05.png";
import meter6 from "../assets/img/foto06.png";
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
                        <h2>GRÁFICOS Y ESTADÍSTICAS</h2>
                        <p>Instituto Nacional de Estadística e Informática:<br></br> Encuesta nacional de programas presupuestales 2011 – 2018
.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                
                                <h5>Porcentaje de canes con hogar que fueron vacunados, según región natural, 2014 - 2018</h5>
                                <p>Con respecto al año 2017, en la región Selva.<br></br> se observa el mayor incremento de hogares que vacunaron a todos sus perros (2,9 puntos porcentuales).
</p>
                            </div>
                            
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Porcentaje de canes con hogar que fueron vacunados, según región natural, 2014 - 2018</h5>
                                <p>Según región natural, observamos que el mayor porcentaje de hogares que vacunaron a todos sus perros se presenta en la Costa con 82,0%, seguido de la Sierra con 69,5% y la Selva con 59,7%.</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Porcentaje de canes con hogar que fueron vacunados, según región natural, 2014 - 2018</h5>
                                <p>Hogares cuya población ha vacunado contra la rabia a todos sus perros el año 2018, el 74,4% de los hogares vacunaron contra la rabia a todos sus perros.</p>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Porcentaje de canes con hogar que fueron vacunados, según región natural, 2014 - 2018</h5>
                                <p>Según región natural, observamos que el mayor porcentaje de perros con hogar que fueron vacunados se presenta en la Costa con 78,8%, seguido de la Sierra con 66,2% y la Selva con 55,0%.</p>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Porcentaje de canes con hogar que fueron vacunados, según región natural, 2014 - 2018 </h5>
                                <p>Perros con hogar que han sido vacunados en los últimos 12 meses En el año 2018, el 70,2% de perros criados por los hogares han sido vacunados contra la rabia.</p>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Mapa departamental</h5>
                                <p>PORCENTAJE DE LA POBLACIÓN DE 14 Y MÁS AÑOS DE EDAD QUE TIENE COMO MASCOTA POR LO MENOS UN PERRO EN SU HOGAR, SEGÚN DEPARTAMENTO, 2018.</p>
                               
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