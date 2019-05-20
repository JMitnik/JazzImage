import styled from 'styled-components';
import Container from '../Container';

const FooterStyles = styled.footer`
  background: #1f2122;
  color: white;
  padding: 48px 0;

  ${Container} {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
  }

  svg {
    fill: white;
  }
`;

export default FooterStyles;
