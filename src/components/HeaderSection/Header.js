import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { ScrollTo } from 'react-scroll-to'

const Title = styled.div`
  margin: 200px auto 80px auto;
  color: #fff;
  font-size: 60px;
  max-width: 800px;
  text-align: center;
`
const Root = styled.div`
  position: relative;
  z-index: 1;
`

const Button = styled.button`
  outline: none;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  display: block;
  font-size: 25px;
  font-weight: bold;
  background-color: #f4bb41;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background: ${darken(0.2, '#f4bb41')};
  }
`
const Bold = styled.span`
  font-weight: bold;
  color: #f4bb41;
`

const Header = () => {
  return (
    <Root>
      <Title>
        Cоздавайте уникальные <Bold>интерактивные фоны</Bold> для ваших сайтов
        вместе с нами!
      </Title>
      <ScrollTo>
        {({ scrollTo }) => (
          <Button onClick={() => scrollTo({ y: 900, smooth: true })}>
            Создать фон
          </Button>
        )}
      </ScrollTo>
    </Root>
  )
}

export default Header
