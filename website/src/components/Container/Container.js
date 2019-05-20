import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: ${props => props.theme.containerWidth};
  margin: 0 auto;
`;

export default Container;
