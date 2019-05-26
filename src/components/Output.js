import React, { Component } from 'react'
import { Surface } from 'gl-react-dom'
import { Shaders, Node, GLSL, connectSize } from 'gl-react'

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
        tthrtht
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
