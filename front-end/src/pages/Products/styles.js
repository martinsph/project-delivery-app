import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  // border: 1px solid;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 220px;
  border: 1px solid;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  & div {
    background-color: #EAF1EF;
    padding: 20px;
    padding-top: 10px;
    text-align: center;
  }
`;

export const Image = styled.img`
  flex: 1;
`;

export const Input = styled.input`
  width: 40px;
`;

export const Span = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
`;
