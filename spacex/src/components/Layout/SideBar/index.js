import React from 'react';
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
          <img src={Logo} alt="SpaceX" className="logo" />
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
              <AnchorLink href='#pastLaunches' >
                Lançamentos anteriores
              </AnchorLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="locations">
            <NavText>
              <AnchorLink href='#upLaunch' >
                Próximos lançamentos
              </AnchorLink>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideBar;