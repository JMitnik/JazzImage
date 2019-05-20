import styled from 'styled-components';

const LayoutStyles = styled.div`
  background: ${props => props.theme.bodyBg};

  .InnerApp {
    display: grid;
    align-content: space-between;
    min-height: 100vh;
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
