import React, { Component } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CodeArea = styled.div`
  background-color: #c4c4c4;
  padding: 20px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export default class GenerateModal extends Component {
  render() {
    const { visible, onOk, onCancel } = this.props
    return (
      <Modal
        title="Фон создан"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        <p>Копируйте код ниже и добавьте на ваш сайт</p>
        <CodeArea>
          <code>
            {'<iframe src="https://backgrounds.herokuapp.com//output" />'}
          </code>
        </CodeArea>

        <Link to="/output/">Посмотреть превью</Link>
      </Modal>
    )
  }
}
