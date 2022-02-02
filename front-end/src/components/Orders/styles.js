import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 2px 4px #00000040;
  
  & .order-number {
    height: 75px;
    width: 75px;
    display: flex;
    background: #e5e5e5;
    align-items: center;
    text-align: center;
  }
  & .order-status {
    background: #D4C63B;
    border-radius: 6px;
    margin: 6px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  & .order-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-self: center;
  
    & p {
      background: #eee;
      padding: 4px;
      border-radius: 2px;
    }
  }
`;

export const Address = styled.p`
  display: flex;
  text-align: center;
  align-self: center;
  font-weight: bold;
  background: royalblue;
`;
