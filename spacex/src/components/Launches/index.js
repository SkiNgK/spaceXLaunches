import React, { useEffect, useRef, useState } from 'react';
import api from '../../services/Api';
import AllLaunches from './AllLaunches';

import './index.css'
import 'react-data-table-component-extensions/dist/index.css';
import LatestLaunch from './LatestLaunch';

function Launches() {
  const [launches, setLaunches] = useState(null)
  const [lastLaunch, setLastLaunch] = useState(null)
  const [pastLaunches, setPastLaunches] = useState(null)
  const [upLaunch, setUpLaunch] = useState(null)

  const loadingRef = useRef(false)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    loadingRef.current = true
    await getAllLaunches()
      .then((response) => {
        setLaunches(response)
      })
    await getLastLaunches()
      .then((response) => {
        setLastLaunch(response)
      })
    loadingRef.current = false
    console.log('carregado')
  }

  const getAllLaunches = async () => {
    try {
      const response = await api.get('/launches')
      return response.data;
    } catch (error) {
      return error
    }
  }

  const getLastLaunches = async () => {
    try {
      const response = await api.get('/launches/latest')
      return response.data;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  return (
    <div className="Launches">
      <section id="launches" className='white'>
        <div className="content-container">
          {launches && <AllLaunches launches={launches} />}
        </div>
      </section>
      <section id="lastLaunches" className='blue'>
        <div className="content-container">
          {lastLaunch && <LatestLaunch lastLaunch={lastLaunch} />}
        </div>
      </section>
    </div>
  );
}

export default Launches;