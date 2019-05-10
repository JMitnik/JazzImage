import styled from 'styled-components';

const SidebarStyles = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #444;
  color: white;

  .active {
    font-weight: bold;
  }

  ul {
    list-style: none;

    a {
      color: inherit;
      text-decoration: none;
      display: block;
      margin-bottom: 24px;
    }
  }
`;

export default SidebarStyles;
