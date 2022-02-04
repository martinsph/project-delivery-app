import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  // position: fixed;
  // width: 100%;
  // z-index: 10;
  background-color: #036B52;
  color: white;
  box-shadow: 0 2px 2px silver;

  & nav {
    display: flex;
    gap: 10px;
    margin-right: auto;
  };

  & nav ~ a {
    background: #056CF9;
  }

  & h3 {
    display: flex;
    align-items: center;
    background-color: #421981;
    padding: 16px;
  };

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 20px;
    &:hover {
    background-color: #ffffff50;
  }
`;

export default Header;
