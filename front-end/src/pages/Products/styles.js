import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  position: relative;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  gap: 20px;
  margin: 40px 0;
  display: flex;
`;

export const Image = styled.img`
  // height: 200px;
  object-fit: fill;
  // flex: 1;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 220px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 0 rgba(0, 0, 0, .3);
  position: relative;
  transform: scale(0);
  animation: showUp 300ms 100ms ease-out forwards;

  // Zoom no card ao pousar o cursor sobre ele
  // &:hover {
  //   transform: scale(3);
  // }

  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    background-color: #EAF1EF;
    // padding: 20px;
    // padding-top: 10px;
    text-align: center;
  }

  // Gambiarra pq a primeira imagem do
  // card tá zoada e não sei pq
  &:first-of-type img {
    object-fit: scale-down;
    height: 218px;
  }

  @keyframes showUp {
    to {
      transform: scale(1);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const Cart = styled.div`
  position: fixed;
  border-radius: 5px;
  padding: 16px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #036B52;
  bottom: 20px;
  right: 20px;

  &:hover {
    cursor: pointer;
    background-color: #036B60;
  }
`;
