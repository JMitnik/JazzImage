import styled from 'styled-components';
import Container from '../Container';
import { LogoStyles } from '../Logo';

const HeaderbarStyles = styled.div`
  position: relative;
  background: white;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.03) 0 1px 2px 0;
  margin-bottom: 48px;

  svg {
    width: 60px;
  }

  ${Container} {
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  ${LogoStyles} {
    color: ${props => props.theme.colors.textColor};
    fill: ${props => props.theme.colors.textColor};
  }

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;

    li {
      margin-right: 24px;

      a {
        line-height: 100%;
        text-decoration: none;
      }
    }
  }
`;

export default HeaderbarStyles;
