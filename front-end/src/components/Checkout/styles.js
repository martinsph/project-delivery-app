import styled from 'styled-components';

export const Form = styled.form`
  background-color: #FBFFFE;
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  background-color: #FBFFFE;
  margin: 10px;
  
  &:nth-child(1) {
    width:250px;
  }

  &:nth-child(2) {
    width:500px;
  }

  &:nth-child(3) {
    width:100px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 6px;
  background-color: #036B52;
  color: #F2FFFC;
  border: none;
  box-shadow: 0 8px 4px -4px #00000050;
  border-radius: 6px;
  margin: auto;
  margin-top: 30px;
  height: 40px;
  font-weight: bold;
  align-items: center;
  transition: 100ms;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 0 0;
  }
`;

export const Input = styled.input`
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 8px 8px;
`;

export const Select = styled.select`
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 4px 8px;
`;

export const Td = styled.td`
  text-align: center;
  padding: 6px;

  &:nth-child(1) {
    background-color: #2FC18C;
    border-radius: 6px 0 0 6px;
  }
  &:nth-child(2) {
    background-color: #EBF1EF;
  }
  &:nth-child(3) {
    background-color: #036B52;
    color: #F2FFFC;
  }
  &:nth-child(4) {
    background-color: #421981;
    color: #F2FFFC;
  }
  &:nth-child(5) {
    background-color: #056DF9;
    color: #F2FFFC;
  }
  &:nth-child(6) {
    background-color: #2FC18C;
    border-radius: 0 6px 6px 0;
    color: #F2FFFC;
  }
`;

export const Table = styled.table`

`;

export const Th = styled.th`
  font-family: 'Nunito', sans-serif;
`;
