import React from 'react';
import Container from '../../components/Container';
import { OutlinedButton } from '../../components/Button/Button';
import { Link } from 'gatsby';
import VerticalTimeline from './VerticalTimeline';
import Img from 'gatsby-image';
import AboutStyles from './About.style';

const About = ({ data }) => (
  <AboutStyles>
    <Container>
      <div className="right">
        <Img fixed={data.portrait.childImageSharp.fixed} />
      </div>

      <div className="content">
        <h2>About</h2>
        <h3 className="intro">{data.introduction}</h3>
        <div style={{ textAlign: 'right' }}>
          <OutlinedButton>
            <Link to="/albums">Read more</Link>
          </OutlinedButton>
        </div>
      </div>
    </Container>
  </AboutStyles>
);

About.propTypes = {};

export default About;
