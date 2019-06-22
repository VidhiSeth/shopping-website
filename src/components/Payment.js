import React, { Component } from 'react';
import styled from 'styled-components'


export default class Payment extends Component {
  render() {
    return (
        <PaymentWrapper>
    <section>
      <div>Your payment was successful!</div>
      </section>
      </PaymentWrapper>
    )
  }
}

const PaymentWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    height: 100vh;
`