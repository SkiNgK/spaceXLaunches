import React from 'react';
import { AiOutlineRocket } from 'react-icons/ai';
import noImg from './../../../assets/img/no-image.png'
import moment from 'moment'

import './index.css';
import { Button } from 'react-bootstrap';

function Launch({ lastLaunch, completed, section }) {

  return (
    <div className="LatestLaunch" >
      <div className="title-container" id="lastLaunches">
        {completed ?
          <h1>Último Lançamento</h1>
          :
          <h1>Próximos Lançamentos</h1>
        }
      </div>
      <div className="content-container">
        <div className="mission-content">
          {lastLaunch.links.youtube_id ?
            <iframe
              width="700"
              height="415"
              title={lastLaunch.mission_name}
              src={`//www.youtube.com/embed/${lastLaunch.links.youtube_id}`}
              frameborder="0"
              allowfullscreen />
            :
            <iframe
              width="700"
              height="415"
              title='Why SpaceX is Making Starlink'
              src="https://www.youtube.com/embed/giQ8xEWjnBs"
              frameborder="0"
              allowfullscreen />
          }
          <div className={section === 'blue' ? "mission-details" : "mission-details-light"}>
            <h1>{lastLaunch.mission_name}</h1>
            <span>
              <AiOutlineRocket size='1.5em' />
              {lastLaunch.rocket.rocket_name} | {lastLaunch.rocket.rocket_type}
            </span>
            {lastLaunch.links.mission_patch ?
              <img
                src={lastLaunch.links.mission_patch}
                alt={lastLaunch.mission_name}
                width="200"
                height="200" />
              :
              <img
                src={noImg}
                alt='Sem Brasão'
                width="200"
                height="200" />
            }
            {completed ?
              <div className="mission-conclusion">
                Conclusão:
              {lastLaunch.launch_success ?
                  <div className="success">Sucesso</div>
                  :
                  <div className="failure">Falha</div>
                }
              </div>
              :
              <></>
            }
            <br />
            <div className="mission-local">
              Local:
              <div className="location">
                {lastLaunch.launch_site.site_name} | {lastLaunch.launch_site.site_name_long}
              </div>
            </div>
            <div className="mission-more-info">
              <Button variant={section === 'blue' ? "light" : "primary"} onClick={() => {
                window.open(lastLaunch.links.wikipedia, '_blank');
              }}>Mais informações</Button>
            </div>
            <div className="mission-date">
              Data de Lançamento:
              <div className="date">
                {moment.utc(lastLaunch.launch_date_utc).local().format('DD/MM/YYYY HH:mm:ss')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launch;