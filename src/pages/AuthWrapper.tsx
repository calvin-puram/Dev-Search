import React from "react";
import styled from "styled-components";
import loadingGif from "../images/preloader.gif";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  children: any;
};

const AuthWrapper: React.FC<Props> = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingGif} alt='loader' />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
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
