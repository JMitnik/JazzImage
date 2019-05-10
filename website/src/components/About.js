import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Portrait from '../images/portrait.jpg';
import VerticalTimeline from './VerticalTimeline';

const AboutStyles = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 24px;

  h2 {
    font-size: 2rem;
  }

  .left {
    padding: 24px;
    max-width: 600px;
  }

  .right {
    text-align: right;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 100%;
    }
  }
`;

const About = props => (
  <AboutStyles>
    <div className="left">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        culpa totam, odit similique sint earum provident, fugit corporis facere,
        veniam aliquam? Amet deleniti laborum ratione nihil accusantium cum
        mollitia incidunt rerum voluptatum numquam reprehenderit culpa,
        accusamus eaque repudiandae, inventore, adipisci doloribus asperiores
        quam eveniet sequi labore officiis voluptatibus neque? Quia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        culpa totam, odit similique sint earum provident, fugit corporis facere,
        veniam aliquam? Amet deleniti laborum ratione nihil accusantium cum
        mollitia incidunt rerum voluptatum numquam reprehenderit culpa,
        accusamus eaque repudiandae, inventore, adipisci doloribus asperiores
        quam eveniet sequi labore officiis voluptatibus neque? Quia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        culpa totam, odit similique sint earum provident, fugit corporis facere,
        veniam aliquam? Amet deleniti laborum ratione nihil accusantium cum
        mollitia incidunt rerum voluptatum numquam reprehenderit culpa,
        accusamus eaque repudiandae, inventore, adipisci doloribus asperiores
        quam eveniet sequi labore officiis voluptatibus neque? Quia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        culpa totam, odit similique sint earum provident, fugit corporis facere,
        veniam aliquam? Amet deleniti laborum ratione nihil accusantium cum
        mollitia incidunt rerum voluptatum numquam reprehenderit culpa,
        accusamus eaque repudiandae, inventore, adipisci doloribus asperiores
        quam eveniet sequi labore officiis voluptatibus neque? Quia!
      </p>
    </div>
    <div className="right">
      <img width="100px" src={Portrait} />
      <VerticalTimeline />
    </div>
    <div />
  </AboutStyles>
);

About.propTypes = {};

export default About;
