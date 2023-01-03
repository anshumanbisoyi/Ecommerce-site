import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:30px;
background-color: grey;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size:14px ;
font-weight: 500;
`;

const Annoucement = () => {
  return (
    <Container>10% off on 1st purchase + Free shipping over Rs 999.</Container>
  );
}

export default Annoucement