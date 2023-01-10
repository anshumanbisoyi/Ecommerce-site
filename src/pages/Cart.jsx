import React from 'react'
import styled from 'styled-components';
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled"? "black": "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;

`;
 const Bottom = styled.div`
display: flex;
justify-content: space-between;
 `;
 const Info = styled.div`
 flex:3;`;
 const Summary = styled.div`
 flex:1;
 `;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue</TopButton>
          <TopTexts>
            <TopText>Cart(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
            {/* <Info>
                <Product>
                    <Detail>
                        <Image src=""/>
                        <Details>
                            <Name></Name>
                        </Details>
                    </Detail>
                    <Price></Price>
                </Product>
            </Info> */}
            <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart