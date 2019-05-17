import React, { useState } from 'react';
import { Link } from 'gatsby';
import SidebarStyles, { Hamburger } from './Sidebar.style';
import MenuIcon from '../../images/icons/icon-menu.svg';
import CloseIcon from '../../images/icons/icon-close.svg';

const Sidebar = () => {
  const [openNav, setopenNav] = useState(false);

  return (
    <div>
      <SidebarStyles>
        <Hamburger onClick={() => setopenNav(!openNav)}>
          {openNav ? <CloseIcon /> : <MenuIcon />}
          {/* <MenuIcon fill="white" /> */}
        </Hamburger>
        <div>
          <ul className={openNav ? '' : 'mob-hidden'}>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/albums" activeClassName="active">
                Albums
              </Link>
            </li>
          </ul>
        </div>
      </SidebarStyles>
    </div>
  );
};

export default Sidebar;
