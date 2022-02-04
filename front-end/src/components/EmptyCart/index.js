import React from 'react';
import styled from 'styled-components';

const SadFace = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid;
  
  &:before {
    content: '';
    top: 25px;
    left: 25px;
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
  }

  &:after {
    content: '';
    top: 25px;
    right: 25px;
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
  }
`;

const EmptyCart = () => <SadFace />;

export default EmptyCart;
