import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import ArrowRight from '../../images/icons/arrow-right-circle.svg';
import HeroStyles from './Hero.style';
import Logo from '../../components/Logo';

const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.textColor};
  fill: ${props => props.theme.colors.textColor};
  padding-bottom: 12px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.textColor};
  text-align: right;
  font-family: ${props => props.theme.fonts.mainFamily};
  font-weight: 100;
`;

const Hero = ({ photos }) => (
  <HeroStyles>
    <div className="image">
      <Img
        objectPosition="bottom"
        fluid={photos[0].localFile.childImageSharp.fluid}
      />
    </div>
    <div className="content">
      <div className="top">
        <Heading>
          <Logo />
        </Heading>
        <Subheading>
          Photos <i>shot</i> and <i>edited</i> by Arkady Mitnik.
        </Subheading>
      </div>
      <div className="bottom">
        <div className="nav-bottom">
          <hr />
          <nav>
            <ul>
              <li>
                <Link to="/albums">
                  <span>Gallery</span>
                  <ArrowRight />
                </Link>
              </li>
              <li>
                <Link to="/albums">
                  <span>Services</span>
                  <ArrowRight />
                </Link>
              </li>
              <li>
                <Link to="/albums">
                  <span>Contact</span>
                  <ArrowRight />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </HeroStyles>
);

export default Hero;
