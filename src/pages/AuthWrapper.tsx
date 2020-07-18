import React from "react";
import styled from "styled-components";
// import loadingGif from "../images/preloader.gif";
// import {useAuth0} from '@auth0/auth0-react'

const AuthWrapper = () => {
  return (
    <Wrapper>
      <h2>wrapper compomnent</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
