import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'antd/dist/antd.css'
import Main from './components/Main'
import Output from './components/Output'
import GradientsLoop from './components/ConstructorSection/BackgroundExamples/GradientsLoop'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return React.createElement(component, finalProps)
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest)
      }}
    />
  )
}
export default class App extends Component {
  state = {
    contrast: 3,
    saturation: 5,
    brightness: 5,
    selectedItem: <GradientsLoop />,
    width: '100%',
    height: '100vh'
  }
  generateOutput = (
    contrast,
    saturation,
    brightness,
    selectedItem,
    width,
    height
  ) => {
    this.setState({
      contrast,
      saturation,
      brightness,
      selectedItem,
      width,
      height
    })
  }
  render() {
    const {
      contrast,
      saturation,
      brightness,
      selectedItem,
      width,
      height
    } = this.state
    return (
      <Router>
        <PropsRoute
          path="/"
          exact
          component={(props) => (
            <Main {...props} generateOutput={this.generateOutput} />
          )}
          generateOutput={this.generateOutput}
        />
        <PropsRoute
          path="/output/"
          component={(props) => (
            <Output
              {...props}
              width={width}
              height={height}
              contrast={contrast}
              saturation={saturation}
              brightness={brightness}
              selectedItem={selectedItem}
            />
          )}
        />
      </Router>
    )
  }
}
