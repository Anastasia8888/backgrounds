import React, { Component } from 'react'
import { Shaders, Node, GLSL, connectSize } from 'gl-react'
import { Surface } from 'gl-react-dom'
import { Slider, Input, Row, Button } from 'antd'
import styled from 'styled-components'

import Output from '../Output'

import GenerateModal from './GenerateModal'

const shaders = Shaders.create({
  Saturate: {
    frag: GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t;
  uniform float contrast, saturation, brightness;
  const vec3 L = vec3(0.2125, 0.7154, 0.0721);
  void main() {
    vec4 c = texture2D(t, uv);
      vec3 brt = c.rgb * brightness;
      gl_FragColor = vec4(mix(
      vec3(0.5),
      mix(vec3(dot(brt, L)), brt, saturation),
      contrast), c.a);
  }
  `
  }
})

const GenerateButton = styled(Button)`
  display: block;
  margin: 20px auto 0 auto;
`
const OutputBlock = styled.div`
  display: none;
`

const Root = styled.div`
  margin: 50px 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`
const ImageBlock = styled.div`
  width: 50%;
`
const Header = styled.div`
  font-size: 25px;
`
const Hr = styled.hr`
  width: 100%;
  margin: 15px 0;
  background-color: #c9c9c9;
  border: none;
  height: 1px;
`

const SettingsBlock = styled.div`
  padding: 50px 80px;
  width: 500px;
  background: linear-gradient(to left, #fdffdd, #fff, #fdffdd);
`
const ItemName = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Saturate = ({ contrast, saturation, brightness, children }) => (
  <Node
    shader={shaders.Saturate}
    uniforms={{ contrast, saturation, brightness, t: children }}
  />
)

export default class Settings extends Component {
  state = {
    contrast: 1,
    saturation: 1,
    brightness: 1,
    blue: 0.1,
    visible: false,
    height: '400px',
    width: '600px'
  }

  onChangeContrast = (value) => {
    this.setState({
      contrast: value
    })
  }
  onChangeSaturation = (value) => {
    this.setState({
      saturation: value
    })
  }
  onChangeBrightness = (value) => {
    this.setState({
      brightness: value
    })
  }
  onChangeBlue = (value) => {
    this.setState({
      blue: value
    })
  }
  onChangeHeight = (e) => {
    this.setState({
      height: e.target.value
    })
  }
  onChangeWidth = (e) => {
    this.setState({
      width: e.target.value
    })
  }

  generateBackground = () => {
    this.setState({
      visible: true
    })
  }

  onOk = () => {
    this.setState({
      visible: false
    })
  }

  onCancel = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const {
      contrast,
      saturation,
      brightness,
      visible,
      width,
      height
    } = this.state

    return (
      <Root>
        <ImageBlock>
          <Surface width={600} height={400}>
            <Saturate {...this.state}>{this.props.selectedItem}</Saturate>
          </Surface>
        </ImageBlock>
        <SettingsBlock>
          <Header>Меню настроек</Header>
          <Hr />
          <Row>
            <ItemName>Контраст</ItemName>
            <Slider
              min={1}
              max={20}
              onChange={this.onChangeContrast}
              value={typeof contrast === 'number' ? contrast : 0}
            />
          </Row>
          <Row>
            <ItemName>Насыщенность</ItemName>
            <Slider
              min={1}
              max={20}
              onChange={this.onChangeSaturation}
              value={typeof saturation === 'number' ? saturation : 0}
            />
          </Row>
          <Row>
            <ItemName>Яркость</ItemName>
            <Slider
              min={1}
              max={20}
              onChange={this.onChangeBrightness}
              value={typeof brightness === 'number' ? brightness : 0}
            />
          </Row>
          <Row>
            <Inputs>
              <ItemName>Высота фона</ItemName>
              <Input
                placeholder="Введите высоту"
                style={{ width: '200px' }}
                onBlur={this.onChangeHeight}
              />
            </Inputs>
          </Row>
          <Row>
            <Inputs>
              <ItemName>Ширина фона</ItemName>
              <Input
                placeholder="Введите ширину"
                style={{ width: '200px' }}
                onBlur={this.onChangeWidth}
              />
            </Inputs>
          </Row>
          <GenerateButton type="primary" onClick={this.generateBackground}>
            Сгенерировать фон
          </GenerateButton>

          {/* <Output
            width={width}
            height={height}
            contrast={contrast}
            saturation={saturation}
            brightness={brightness}
            selectedItem={this.props.selectedItem}
          /> */}
        </SettingsBlock>
        <GenerateModal
          visible={visible}
          onOk={this.onOk}
          onCancel={this.onCancel}
        />
      </Root>
    )
  }
}
