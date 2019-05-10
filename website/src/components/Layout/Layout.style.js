import styled from 'styled-components';

const LayoutStyles = styled.div`
  display: grid;
  grid-template-columns: 200px auto;

  .main {
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
