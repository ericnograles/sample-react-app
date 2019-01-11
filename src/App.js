import React, { Component } from 'react'
import AppHeader from './AppHeader'
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader />
      </AppContainer>
    );
  }
}

export default App;
