import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom'
import SideNav, { NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Logo from '../../../assets/img/spacex-logo.png'
import './index.css'

function SideBar() {
  const history = useHistory();

  const wrapperRef = useRef(null);

  return (
    <div ref={wrapperRef}>
      <SideNav
        className="SideBar"
        onSelect={(selected) => {
          history.push('/' + selected);
        }}
        expanded={true}
        onToggle={{}}
      >
        <div className="logo-area">
          <img src={Logo} alt="Ares Logo" className="logo" />
        </div>
        <SideNav.Nav >
          <NavItem eventKey="profile">
            <NavText>
              Lançamentos
            </NavText>
          </NavItem>
          <NavItem eventKey="devices">
            <NavText>
              Lançamentos anteriores
            </NavText>
          </NavItem>
          <NavItem eventKey="my-devices">
            <NavText>
              Próximos lançamentos
            </NavText>
          </NavItem>
          <NavItem eventKey="locations">
            <NavText>
              Último lançamento
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideBar;