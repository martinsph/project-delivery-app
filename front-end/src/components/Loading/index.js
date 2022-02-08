import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
`;

const Spinner = styled.div`
  margin: auto;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 5px solid skyblue;
  border-left-color: transparent;
  animation: spin 500ms linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default Loading;
