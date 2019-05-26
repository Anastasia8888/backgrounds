import React, { Component } from 'react'
import styled from 'styled-components'
import { Surface } from 'gl-react-dom'
import { Tooltip } from 'antd'

import Background from '../HeaderSection/Background'

import GradientsLoop from './BackgroundExamples/GradientsLoop'
import Example2 from './BackgroundExamples/Example2'
import DesertPassageLoop from './BackgroundExamples/DesertPassageLoop'
import Example3 from './BackgroundExamples/Example3'
import Example1 from './BackgroundExamples/Example1'

const text = 'Двойной клик - выбор фона.'
const Root = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const Img = styled.input`
  width: 300px;
  height: 300px;
  object-fit: contain;
`

const ImgWrapper = styled.button`
  display: block;
  border: none;
  background-color: #fff;
  cursor: pointer;
  width: 300px;
  height: 300px;
  margin: 20px;
`

const ImagesBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
const elements = [
  {
    id: '1',
    value: <Example1 />
  },
  {
    id: '2',
    value: <GradientsLoop />
  },
  {
    id: '3',
    value: <Example2 />
  },
  {
    id: '4',
    value: <DesertPassageLoop />
  },
  {
    id: '5',
    value: <Example3 />
  },
  ,
  {
    id: '6',
    value: <Background />
  }
]

export default class ConstructorLayout extends Component {
  state = {
    selectedItem: null
  }

  selectNewItem = (e) => {
    const value = elements.filter((item) => item.id == e.currentTarget.id)

    this.setState({
      selectedItem: value[0].value
    })
    console.log(this.state.selectedItem)

    this.props.getSelectedItem(this.state.selectedItem)
  }

  render() {
    const { selectNewItem } = this
    return (
      <Root>
        <ImagesBlock>
          {elements.map((item) => (
            <Tooltip title={text} key={item.id} id={item.id}>
              <ImgWrapper onClick={selectNewItem} id={item.id} key={item.id}>
                <Surface
                  width="400px"
                  height="300px"
                  id={item.id}
                  key={item.id}
                >
                  {item.value}
                </Surface>
              </ImgWrapper>
            </Tooltip>
          ))}
        </ImagesBlock>
      </Root>
    )
  }
}
