import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  :focus {
    outline: none !important;
    border: 1px solid black;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Wanna have personalised discounts?</Title>
      <Description>
        Get timely info about the discounts of your favorite products.
      </Description>
      <InputContainer>
        <Input placeholder=" Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
