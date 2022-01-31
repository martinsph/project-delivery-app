import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: snow;
  height: 100%;
`;

export const Container = styled.div`
  margin: auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  & h2 {
    margin-bottom: 10px;
  }
`;
