import React from "react";

import "../style.css";
import fondo from "./images/Progress_Arx.png";

class Progress extends React.Component {
  render() {
    return (
      <section class="feature-area section-padding-top" id="features_page">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2">
              <div class="page-title text-center">
                <h5 class="title">Características</h5>
                <div class="space-10" />
                <h3>Increíbles y Únicas Caracterísiticas</h3>
                <div class="space-60" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                <div class="box-icon">
                  <i class="lnr lnr-rocket" />
                </div>
                <h4>Fácil acceso</h4>
                <p>Llegamos a culquier comprador o agricultor en todo el país conectado a internet.</p>
              </div>
              <div class="space-60" />
              <div class="service-box wow fadeInUp" data-wow-delay="0.4s">
                <div class="box-icon">
                  <i class="lnr lnr-paperclip" />
                </div>
                <h4>Precios justos</h4>
                <p>Al evitar intermediarios accedes a alimentos más baratos.</p>
              </div>
              <div class="space-60" />
              <div class="service-box wow fadeInUp" data-wow-delay="0.6s">
                <div class="box-icon">
                  <i class="lnr lnr-cloud-download" />
                </div>
                <h4>Comodidad</h4>
                <p>Instala la app, regístrate y listo, programa tu compra.</p>
              </div>
              <div class="space-60" />
            </div>
            <div class="hidden-xs hidden-sm col-md-4">
              <figure class="mobile-image">
                <img src="/" alt="Feature" />
              </figure>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                <div class="box-icon">
                  <i class="lnr lnr-clock" />
                </div>
                <h4>Agricultura local</h4>
                <p>Apoya a los agricultores locales y el comercio nacional.</p>
              </div>
              <div class="space-60" />
              <div class="service-box wow fadeInUp" data-wow-delay="0.4s">
                <div class="box-icon">
                  <i class="lnr lnr-laptop-phone" />
                </div>
                <h4>Tecnologia de punta</h4>
                <p>Sistema de posición global, actualización de productos en tiempo real.</p>
              </div>
              <div class="space-60" />
              <div class="service-box wow fadeInUp" data-wow-delay="0.6s">
                <div class="box-icon">
                  <i class="lnr lnr-cog" />
                </div>
                <h4>Seguridad</h4>
                <p>Minuto a minuto su ubicación, conoce de donde viene tu alimento de la mejor calidad.</p>
              </div>
              <div class="space-60" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Progress;
