import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Coach {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
  teste:ClassSchedule;
  // week_day:number;
  // from: any;
  // to: any;
}
export interface ClassSchedule {
  id: number;
  weekday:WeekDay;
  from: number;
  to: number;
}
 enum  WeekDay  {
  domingo = 'Domingo', 
   segunda= 'Segunda-feira',
  // quarta=2,
  // quinta=3,
  // sexta= 4,
  // sabado= 5,
}
interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({ coach }) => {
  function createNewConnection() {
    api.post('connections', {
      coach_id: coach.id,
      // classes_id: coach.id,
      // class_schedule_id:coach.id,
      // connections_id:coach.id,

    });
      api.post('class_schedule', {
        //coach_id: coach.id,
         class_id: coach.teste.id,
        // class_schedule_id:coach.id,
        // connections_id:coach.id,
  
      });
  }

  return (
    <article className="coach-item">
      <header>
        <img src={coach.avatar} alt={coach.name} />
        <div>
          <strong>{coach.name}</strong>
          <span>{coach.subject}</span>
        </div>
      </header>

      <p>{coach.bio}</p>

      <footer>
        <p>Preço/Hora
          <strong>R$ {coach.cost}</strong>
        </p>
        <p></p>
      
        <p>Horario:
        <strong>{coach.teste.weekday}</strong>
          <strong>De {coach.teste.from}</strong>
          <strong>até {coach.teste.to}</strong>
        </p>
        <a
          target="_blank" 
          rel="noreferrer"
          onClick={createNewConnection} 
          href={`https://wa.me/${coach.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default CoachItem;
