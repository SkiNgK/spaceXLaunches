import React, { useEffect } from 'react';
import { AiOutlineRocket } from 'react-icons/ai';
import moment from 'moment'

import './index.css';
import { Button } from 'react-bootstrap';

function LatestLaunch({ lastLaunch }) {

  useEffect(() => {
    if (lastLaunch) {
      console.log(lastLaunch)
    }
  }, []);

  return (
    <div className="LatestLaunch" >
      <div className="title-container" id="lastLaunches">
        <h1>Último Lançamento</h1>
      </div>
      <div className="content-container">
        <div className="mission-content">
          <iframe
            width="700"
            height="415"
            src={`//www.youtube.com/embed/${lastLaunch.links.youtube_id}`}
            frameborder="0"
            allowfullscreen />
          <div className="mission-details">
            <h1>{lastLaunch.mission_name}</h1>
            <span>
              <AiOutlineRocket size='1.5em' />
              {lastLaunch.rocket.rocket_name} | {lastLaunch.rocket.rocket_type}
            </span>
            <img
              src={lastLaunch.links.mission_patch}
              alt={lastLaunch.mission_name}
              width="200"
              height="200" />
            <div className="mission-conclusion">
              Conclusão:
              {lastLaunch.launch_success ?
                <div className="success">Sucesso</div>
                :
                <div className="failure">Falha</div>
              }
            </div>
            <br />
            <div className="mission-local">
              Local:
              <div className="location">
                {lastLaunch.launch_site.site_name} | {lastLaunch.launch_site.site_name_long}
              </div>
            </div>
            <div className="mission-more-info">
              <Button variant="light" onClick={() => {
                window.open(lastLaunch.links.wikipedia, '_blank');
              }}>Mais informações</Button>
            </div>
            <div className="mission-date">
              Data de Lançamento:
              {moment.utc(lastLaunch.launch_date_utc).local().format('DD/MM/YYYY HH:mm:ss')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestLaunch;