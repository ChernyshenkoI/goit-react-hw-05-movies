import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './navBar.css';

const NavBar = () => {
  return (
    <WrapperBar>
      <StyledBar>
        <NavLink
          className={({ isActive }) => 'link' + (isActive ? ' active' : '')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => 'link' + (isActive ? ' active' : '')}
          to="/movies"
        >
          Movies
        </NavLink>
      </StyledBar>
    </WrapperBar>
  );
};

const WrapperBar = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledBar = styled.div`
  border-radius: 25px;
  height: fit-content;
  display: inline-flex;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
  margin: 50px 0 0 0;
`;

export default NavBar;
