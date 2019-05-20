import styled from 'styled-components';

const LayoutStyles = styled.div`
  /* display: grid; */
  /* grid-template-columns: 200px auto; */

  /* @media (max-width: 700px) {
    grid-template-columns: auto;
    grid-template-rows: 80px auto;
  } */
  background: ${props => props.theme.bodyBg};

  .InnerApp {
    display: grid;
    align-content: space-between;
    min-height: 100vh;
    /* background: #eee; */
  }

  main {
    overflow: auto;
  }

  .content {
    padding: 24px;
  }

  h1,
  h2,
  h3,
  p {
    margin-bottom: 24px;
  }
`;

export default LayoutStyles;
