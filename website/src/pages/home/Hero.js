import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeroBG from '../../images/hero-bg.jpg';
import Logo from '../../components/Logo';

const HeroStyles = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;

  .image {
    background-image: url(${HeroBG});
    background-position: center right;
    background-repeat: no-repeat;
    background-size: cover;
    width: 60%;
  }

  .content {
    width: 40%;
    position: relative;
    padding: 100px;
    display: flex;
    align-items: space-between;
    justify-content: flex-end;
    flex-wrap: wrap;

    .bottom {
      width: 100%;
      display: flex;
      align-items: flex-end;

      .nav-bottom {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      nav {
        ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
        }

        a {
          font-weight: 1000;
          color: #606f7b;
          text-decoration: none;
        }
      }

      hr {
        width: 100%;
        background: #dae1e7;
        border: 0;
        height: 1px;
        margin-bottom: 24px;
      }
    }
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
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

const Hero = () => (
  <HeroStyles>
    <div className="image" />
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
                <Link to="/albums">Gallery</Link>
              </li>
              <li>
                <Link to="/albums">Services</Link>
              </li>
              <li>
                <Link to="/albums">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </HeroStyles>
);

export default Hero;
