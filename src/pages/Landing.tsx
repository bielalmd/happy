import React from "react";
import {FiArrowRight} from 'react-icons/fi';

import { Link} from 'react-router-dom'

import '../styles/pages/landing.css';
import logoImg from '../img/marker@2x.png';

function Landing() {
    return (
        <div id="page-landing">
    <div className="content-wrapper">
    <img src={logoImg} className="img-happy" alt="happy" />

    <main>
      <h1>Leve felicidade para o mundo</h1>
      <p>Visite orfanatos e mude o dia de muitas crianças.</p>
    </main>

    <div className="location">
      {/* caso voce seja de outro estados mudar essas duas linhas abaixo */}
      <strong>Guarulhos </strong>
      <span>São Paulo</span>
    </div>

    <Link to="/app" className="entrar-app">
      <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
    </Link>
    
    </div>
    </div>
    );
}

export default Landing;