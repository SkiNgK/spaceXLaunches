import React, { useRef } from 'react';
import SideNav, { NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Logo from '../../../assets/img/spacex-logo.png'
import './index.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function SideBar() {
  return (
    <div>
      <SideNav
        className="SideBar"
        expanded={true}
        onToggle={{}}
      >
        <div className="logo-area">
          <img src={Logo} alt="Ares Logo" className="logo" />
        </div>
        <SideNav.Nav >
          <NavItem eventKey="launches">
            <NavText>
              <AnchorLink href='#launches' >
                Lançamentos
              </AnchorLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="lastLaunches">
            <NavText>
              <AnchorLink href='#lastLaunches' >
                Último lançamento
              </AnchorLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="my-devices">
            <NavText>
              Lançamentos anteriores
            </NavText>
          </NavItem>
          <NavItem eventKey="locations">
            <NavText>
              Próximos lançamentos
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideBar;