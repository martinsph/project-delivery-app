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
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px #00000040;  

  & label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    // border: 1px solid;

    & input {
      padding: 5px;
      border-radius: 4px;
      border: 1px solid #aaa;
    }
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0 20px;
  background-color: #036B52;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0 8px 6px -6px;
  transition: 100ms;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(.98);
    box-shadow: 0 0 0 0;
  }
`;
