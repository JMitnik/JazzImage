import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container';
import HeaderbarStyles from './Headerbar.style';
import Logo from '../Logo';

const Headerbar = () => (
  <HeaderbarStyles>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/albums">
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link to="/albums">
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/albums">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  </HeaderbarStyles>
);

export default Headerbar;
