import React, { Component } from 'react'
import styled from 'styled-components'

import ConstructorLayout from './ConstructorLayout'
import Settings from './Settings'
import Example2 from './BackgroundExamples/Example2'

const Root = styled.div`
  position: relative;
  margin-top: 200px;
`

const Header = styled.h1`
  font-weight: bold;
  color: #f4bb41;
  font-size: 66px;
  text-align: center;
  text-transform: uppercase;
`

export default class BackgroundCarousel extends Component {
  state = {
    selectedItem: <Example2 />
  }

  getSelectedItem = (el) => {
    this.setState({
      selectedItem: el
    })
  }
  render() {
    return (
      <Root>
        <Header id="constructor">Конструктор</Header>
        <Settings
          selectedItem={this.state.selectedItem}
          generateOutput={this.props.generateOutput}
        />
        <ConstructorLayout getSelectedItem={this.getSelectedItem} />
      </Root>
    )
  }
}
