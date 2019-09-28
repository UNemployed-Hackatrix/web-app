import React from "react";

import "../style.css";
import logoAbout from "../images/Logo_70.png";

class About extends React.Component {
  render() {
    return (
      <section className="section-padding" id="about_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <div className="page-title text-center">
                <img src={logoAbout} alt="About Logo" />
                <div className="space-20" />
                <h5 className="title">Acerca de Arx</h5>
                <div className="space-30" />
                <h3 className="purple-color">
                  Participa en nuestra app enfocada a dar el puesto que 
		  verdaderamente se merecen nuestros campesinos colombianos, 
		  participa para obtener alimentos frescos y un mejor precio.
                </h3>
                <div className="space-20" />
                <p>
                  Actualmente la sobrepoblación, la mala nutrición y los cambios climaticos muestran la necesidad
		  de impulsar la alimentación de calidad ofrecida por el sector agropecuario.
		  Con esta aplicación podras tener los alimentos directo del campo, para que nuestros campesinos
		  reciban el dinero sin tener que pagar intermediarios, para poder potenciar sector agropecuario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
