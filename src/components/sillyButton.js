import React, { useContext } from 'react'
import Context from '../context'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { darken } from 'polished'

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`

const StyledButton = styled(animated.button)`
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 5px 20px 5px 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3rem;
  outline: none;

  &:hover {
    background: ${({ theme }) => darken(0.025, theme.colors.white)};
  }

  &:active {
    background: ${({ theme }) => darken(0.05, theme.colors.white)};
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }
`

const Emoji = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
`

const SillyButton = () => {
  const { context, setContext } = useContext(Context)
  const toggleSillyMode = () => setContext({ sillyMode: !context.sillyMode })
  const springProps = useSpring({
    config: {
      tension: 190,
      friction: 26
    },
    from: {
      marginTop: context.sillyMode ? '0px' : '4px',
      marginBottom: context.sillyMode ? '4px' : '0px',
      boxShadow: context.sillyMode
        ? '0 0px 0px 0 rgba(0, 0, 0, 0.1)'
        : '0 4px 4px 0 rgba(0, 0, 0, 0.1)'
    },
    marginTop: context.sillyMode ? '4px' : '0px',
    marginBottom: context.sillyMode ? '0px' : '4px',
    boxShadow: context.sillyMode
      ? '0 0px 0px 0 rgba(0, 0, 0, 0.1)'
      : '0 4px 4px 0 rgba(0, 0, 0, 0.1)'
  })

  return (
    <ButtonContainer>
      <StyledButton style={springProps} onClick={toggleSillyMode}>
        <Emoji>{context.sillyMode ? '😜' : '🙂'}</Emoji>
        <span>Silly Face Mode - {context.sillyMode ? 'ON' : 'OFF'}</span>
      </StyledButton>
    </ButtonContainer>
  )
}

export default SillyButton
