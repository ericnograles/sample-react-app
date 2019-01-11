import React, { Component } from 'react'
import logo from './logo.svg'
import styled, { keyframes } from 'styled-components'

const Header = styled.header`
  flex: 1;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const LogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Logo = styled.img`
  animation: ${LogoSpin} infinite 20s linear;
  height: 40vmin;
`

const Link = styled.a`
  color: #61dafb;
`

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    )
  }
}
