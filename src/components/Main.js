import React from 'react'
import styled from 'styled-components'
import { Surface } from 'gl-react-dom'

import Header from './HeaderSection/Header'
import Background from './HeaderSection/Background'
import BackgroundCarousel from './ConstructorSection/BackgroundCarousel'

const Root = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: 'Arial';
`
const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
`

export default function Main() {
  return (
    <Root>
      <Header />
      <BackgroundWrapper>
        <Surface height="100vh" width="100%">
          <Background />
        </Surface>
      </BackgroundWrapper>
      <BackgroundCarousel />
    </Root>
  )
}
