import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: ${props => props.theme.containerWidth};
  margin: 0 auto;
  flex-wrap: wrap;

  > * {
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export default Container;
