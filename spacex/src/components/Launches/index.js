import React, { useEffect, useRef, useState } from 'react';
import api from '../../services/Api';
import AllLaunches from './AllLaunches';
import './index.css'

function Launches() {
  const [launches, setLaunches] = useState(null)
  const [lastLaunches, setLastLaunches] = useState(null)
  const [pastLaunches, setPastLaunches] = useState(null)
  const [upLaunches, setUpLaunches] = useState(null)

  const loadingRef = useRef(false)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    loadingRef.current = true
    getAllLaunches()
      .then((response) => {
        setLaunches(response)
      })
  }

  const getAllLaunches = async () => {
    try {
      const response = await api.get('/launches')
      return response.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  return (
    <div className="Launches">
      <div className="content-container">
        <AllLaunches launches={launches} />
      </div>
    </div>
  );
}

export default Launches;