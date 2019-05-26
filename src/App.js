import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'antd/dist/antd.css'
import Main from './components/Main'
import Output from './components/Output'
import Background from './components/HeaderSection/Background'

export default function App() {
  const test = '33'
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/output/" component={Output} />
    </Router>
  )
}
