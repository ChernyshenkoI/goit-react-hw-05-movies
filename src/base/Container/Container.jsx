import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  background: url(https://media.istockphoto.com/id/1058727850/vector/abstract-shiny-background-with-blank-film-strips-and-copy-space.jpg?s=612x612&w=0&k=20&c=8o62Z8rY_RQFpqg7fPVCEzvD4iUCG_3Zvkohu0lv1dY=)
    center / cover no-repeat;
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height:100vh;
  margin: 0 auto;
`;
