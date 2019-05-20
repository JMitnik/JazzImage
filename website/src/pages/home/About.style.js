import styled from 'styled-components';
import Container from '../../components/Container';

const AboutStyles = styled.section`
  /* display: grid; */
  /* grid-template-columns: 1fr 2fr; */
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  width: 100%;
  padding: 50px 0;

  ${Container} {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  h2 {
    text-align: right;
    font-size: 3em;
    color: #dae1e7;
  }

  .intro {
    white-space: pre-line;
    text-align: right;
    font-size: 2rem;
    font-family: 'Merriweather', serif;
    font-weight: 500;
  }

  .content {
    display: flex;
    padding: 24px;
    max-width: 600px;
    flex-wrap: wrap;
    justify-self: end;

    > * {
      width: 100%;
    }
  }

  .right {
    text-align: right;
  }
`;

export default AboutStyles;
