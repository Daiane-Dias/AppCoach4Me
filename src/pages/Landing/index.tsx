import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartsIcon from '../../assets/images/icons/purple-heart.svg';
import  './styles.css';

function Landing()
{
    return(
   <div id="page-landing">
    <div id="page-landing-content" className="container">
        <div className="logo-container">
            <img src={logoImg} alt="coach4me" />
            <h2>Encontre Monitores online facilmente</h2>
        </div>
        <img src={landingImg} alt="Plataforma de estudos" className="coach-image" />
        <div className="buttons-container">
            <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
            </a>
            <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
           Dar aulas
            </a>
        </div>
        <span className="total-connections">
            Toatal de 1000 conexões já realizadas <img src={purpleHeartsIcon} alt="Coração roxo" />
        </span>
    </div>
   </div>
    );
}

export default Landing;