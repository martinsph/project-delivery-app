import styled from 'styled-components';

const Card = styled.div`
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

export default Card;