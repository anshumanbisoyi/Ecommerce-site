import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${
      "" /* linear-gradient(
      rgba(255, 255, 252, 0),
      rgba(252, 252, 252, 0.5)
    ), */
    }
    url("https://www.wallpapertip.com/wmimgs/18-185930_black-and-white-wallpaper-model.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: transparent;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin: 20px 10px 0px 0px;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
  margin-bottom:10px;
`;

const Link = styled.a`
margin: 5px 0px;
padding:5px;
font-size:12px;
font-weight: 500;
color:white;
cursor:pointer;
:hover{
    color: black;
}
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          {/* <Input placeholder="Email" /> */}
          <Input placeholder="Password" />
          <Button>Log In</Button>
          <Link>forgot password?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
