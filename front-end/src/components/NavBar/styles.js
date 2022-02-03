import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  background-color: #036B52;
  color: white;

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
