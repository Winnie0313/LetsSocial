import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  background-color: #1d3557;
  color: white
`
const Wrapper = styled.div`
  padding: 10px 20px;
`
const Left = styled.div``
const Middle = styled.div``
const Right = styled.div``

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Middle></Middle>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar