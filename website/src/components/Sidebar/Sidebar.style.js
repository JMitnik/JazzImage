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

  @media (max-width: 700px) {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0 12px;
    right: 0;
    bottom: initial;
    display: flex;
    justify-content: flex-end;
  }

  .active {
    font-weight: bold;
  }

  ul {
    list-style: none;

    @media (max-width: 700px) {
      position: absolute;
      z-index: 200;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
      left: 12px;
      top: 100px;
      color: #444;
      text-align: left;
      background: white;
      padding: 12px;
      right: 12px;

      &.mob-hidden {
        display: none;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      display: block;
      margin-bottom: 24px;
    }
  }
`;

const Hamburger = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;

  fill: #bfbebe;

  @media (min-width: 701px) {
    display: none;
  }
`;

export default SidebarStyles;
export { Hamburger };
