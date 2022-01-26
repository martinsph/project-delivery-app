import React, { useEffect, useState } from 'react';
import styled  from 'styled-components';

const NavbarComponent = () => {

  return (
    <header className="navbar">
      <div className="navbar-1">
        <span>Teste</span>
      </div>
      <div className="navbar-2">
        <div className="navbar-name"></div>
        <button
          type="button"
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default NavbarComponent;