import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background: #e4e4e4;
  padding: 0;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  transition: all 0.2s ease-in;

  &:hover {
    background: #dad8d8;
    transition: all 0.2s ease-in;
  }

  a {
    width: 100%;
    padding: 8px 12px;
    display: block;
  }

  &,
  a {
    font-weight: bold;
    color: #444;
    font-size: 1.2rem;

    text-decoration: none;
  }

  svg {
    vertical-align: top;
    max-width: 25px;
    margin-right: 8px;
  }
`;

export default Button;
