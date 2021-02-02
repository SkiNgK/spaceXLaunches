import React, { useEffect, useState } from 'react';
import api from '../../services/Api';
import AllLaunches from './AllLaunches';
import Launch from './Launch';

import './index.css'
import 'react-data-table-component-extensions/dist/index.css';
import { Spinner } from 'react-bootstrap';

function Launches() {
  const [allLaunches, setAllLaunches] = useState(null)
  const [lastLaunch, setLastLaunch] = useState(null)
  const [pastLaunches, setPastLaunches] = useState(null)
  const [upLaunch, setUpLaunch] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    setLoading(true)
    await getAllLaunches()
      .then((response) => {
        setAllLaunches(response)
      })
    await getLastLaunch()
      .then((response) => {
        setLastLaunch(response)
      })
    await getPastLaunches()
      .then((response) => {
        setPastLaunches(response)
      })
    await getUpcommingLaunch()
      .then((response) => {
        setUpLaunch(response)
      })
    setLoading(false)
  }

  const getAllLaunches = async () => {
    try {
      const response = await api.get('/launches')
      return response.data;
    } catch (error) {
      return error
    }
  }

  const getLastLaunch = async () => {
    try {
      const response = await api.get('/launches/latest')
      return response.data;
    } catch (error) {
      console.log(error);
      return error
    }
  }


  const getPastLaunches = async () => {
    try {
      const response = await api.get('/launches/past')
      return response.data;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  const getUpcommingLaunch = async () => {
    try {
      const response = await api.get('/launches/upcoming')
      return response.data;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  function renderEmptyData(){
    return(
      <div className="">
        Sem dados
      </div>
    )
  }

  return (
    <div className="Launches">
      {loading ?
        <div className="center-page">
          <Spinner animation="border" />
        </div>
        :
        <>
          <section id="launches" className='white'>
            <div className="content-container">
              {allLaunches && <AllLaunches launches={allLaunches} />}
            </div>
          </section>
          <section id="lastLaunches" className='blue'>
            <div className="content-container">
              {lastLaunch && <Launch lastLaunch={lastLaunch} completed={true} section={'blue'} />}
            </div>
          </section>
          <section id="pastLaunches" className='white'>
            <div className="content-container">
              {pastLaunches && <AllLaunches launches={pastLaunches} interval={'Past Launches'} />}
            </div>
          </section>
          <section id="upLaunch" className='blue'>
            <div className="content-container">
              {upLaunch && <Launch lastLaunch={upLaunch[0]} completed={false} section={'blue'} />}
            </div>
          </section>
          <section id="upLaunch" className='white'>
            <div className="content-container">
              {upLaunch && <Launch lastLaunch={upLaunch[1]} completed={false} section={'white'} />}
            </div>
          </section>
        </>
      }
    </div>
  );
}

export default Launches;