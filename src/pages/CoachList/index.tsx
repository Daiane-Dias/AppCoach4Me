import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import CoachItem from '../../components/CoachItem';


function CoachList(){
    return(
        <div id="page-coach-list" className="container">
       <PageHeader title="Estes são os coachs disponiveis"/>
        <form id="search-coaches">
            <div className="input-block">
                <label htmlFor="subject">Matéria</label>
                <input type="text" id="subject"/>
            </div>
            <div className="input-block">
                <label htmlFor="subject">Dia da Semana</label>
                <input type="text" id="week_day"/>
            </div>
            <div className="input-block">
                <label htmlFor="subject">Hora</label>
                <input type="text" id="time"/>
            </div>
        </form>
            <main>
            <CoachItem/>
            <CoachItem/>
            <CoachItem/>
            </main>    

      
            
        </div>
    );
}

export default CoachList