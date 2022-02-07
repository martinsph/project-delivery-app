import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Td = styled.td`
  text-align: center;
  padding: 6px;
  font-weight: bold;

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
    border-radius: 0 6px 6px 0;
    color: #F2FFFC;
  }
`;

export const Table = styled.table`
  margin: 0 8px;
`;

export const Head = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  background-color: #EBF1EF;
  padding: 8px;
`;

export const Header = styled.p`
  &:nth-child(1) {
    font-weight: bold;
  }

  &:nth-child(3) {
    background-color: #D4C63B;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
  }

  &:nth-child(4) {
    background-color: #3BD5B0;
    padding: 4px 24px;
    border-radius: 4px;
    font-weight: bold;
  }

  &:nth-child(5) {
    background-color: #036B52;
    padding: 4px 6px;
    border-radius: 4px;
    color: white;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Td2 = styled.td`
  text-align: center;
  padding: 6px;
  font-weight: bold;

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
    border-radius: 0 6px 6px 0;
    color: #F2FFFC;
  }
`;

export const Table2 = styled.table`
  margin: 0 12px;
`;

export const Head2 = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  background-color: #EBF1EF;
  padding: 8px;
`;

export const Header2 = styled.p`
  & strong {
    font-weight: bold;
  }

  &:nth-child(1) {
    font-weight: bold;
  }

  &:nth-child(3) {
    background-color: #F0FBF9;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
  }

  &:nth-child(4) {
    background-color: #3BD5B0;
    padding: 4px 24px;
    border-radius: 4px;
    font-weight: bold;
  }

  &:nth-child(5) {
    background-color: #036B52;
    padding: 4px 6px;
    border-radius: 4px;
    color: white;
  }
`;
