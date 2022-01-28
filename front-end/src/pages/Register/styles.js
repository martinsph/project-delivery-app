import styled from 'styled-components';

export const RegisterContent = styled.div`
  width: 400px;
  height: 150px;
  left: 50%;
  margin: -130px 0 0 -210px;
  padding: 10px;
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: center;

  h2 {
    display: flex;
    justify-content: center;
  }
`;
export const FormRegister = styled.form`
  background-color: #D3D3D3;
  padding: 30px;
  position: absolute;
  top: 50%;
  width: 70%;
  `;
export const LabelRegister = styled.label`
  margin: 15px;
  `;

export const Button = styled.button`
  padding: 5px 25px;
  background-color: #008f39;
  border: black;
  color: white;
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const InputRegister = styled.input`
  display: flex;
  padding: 10px;
  margin: 5%
`;
