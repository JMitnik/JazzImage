import styled from 'styled-components';

const AboutStyles = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 24px;
  width: 100%;

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

export default AboutStyles;
