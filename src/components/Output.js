import React, { Component } from 'react'
import { Surface } from 'gl-react-dom'
import { Shaders, Node, GLSL, connectSize } from 'gl-react'

import Example1 from '../components/ConstructorSection/BackgroundExamples/Example1'

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

const Saturate = ({ contrast, saturation, brightness, children }) => (
  <Node
    shader={shaders.Saturate}
    uniforms={{ contrast, saturation, brightness, t: children }}
  />
)

export default class Output extends Component {
  defaultProps = {
    contrast: 1,
    saturation: 1,
    brightness: 1,
    selectedItem: <Example1 />,
    width: '100%',
    height: '100vh'
  }
  state = this.defaultProps
  componentDidMount() {
    const {
      contrast,
      saturation,
      brightness,
      selectedItem,
      width,
      height
    } = this.props

    this.defaultProps = {
      contrast,
      saturation,
      brightness,
      selectedItem,
      width,
      height
    }
  }

  render() {
    const {
      contrast,
      saturation,
      brightness,
      selectedItem,
      width,
      height
    } = this.props

    return (
      <div>
        <Surface width={width} height={height}>
          <Saturate
            contrast={contrast}
            saturation={saturation}
            brightness={brightness}
          >
            {selectedItem}
          </Saturate>
        </Surface>
      </div>
    )
  }
}
