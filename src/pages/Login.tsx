import React from "react";
import {} from "@auth0/auth0-react";
import styled from "styled-components";
// import loginImg from "../images/login-img.svg";

const Login = () => {
  return (
    <Wrapper>
      <h1>Login Page</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-botton: 1rem;
  }
`;
export default Login;
