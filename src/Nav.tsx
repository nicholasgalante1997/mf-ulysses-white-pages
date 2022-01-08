import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100vw;
    min-height: 2rem;
    justify-content: flex-start;
    align-items: center;
    color: deeppink;
    font-size: large;
    padding: 0.5rem;
`

const NavBar: React.FunctionComponent<{}> = () => (
  <StyledDiv>
      <h2>Hi I'm the nav! I am remote!</h2>
  </StyledDiv>
);

export default NavBar;
