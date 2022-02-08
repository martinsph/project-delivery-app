import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #FBFFFE;
`;

export const ContainerSection = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 60px;
  & div {
    padding: 20px;
  }
`;

export const ContainerSectionSuperior = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px #00000040;
  margin-bottom: 30px;
  & span {
    align-self: flex-end;
  }
`;

export const ContainerSectionInferior = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px #00000040;
`;

export const Span = styled.span`
  padding: 8px 12px;
  background-color: #036B52;
  border-radius: 4px;
  margin-top: 30px;
  color: #F2FFFC;
  font-weight: bold;
`;
