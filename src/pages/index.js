import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import LayoutSplash from '../layouts/splash'
import SEO from '../components/seo'
import HeaderSplash from '../components/headerSplash'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import P from '../components/paragraph'
import { config, animated, useSpring } from 'react-spring'
import useIsInViewport from 'use-is-in-viewport'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    text-align: center;
    ${fluidRange(
    { prop: 'padding', fromSize: '15px', toSize: '30px' },
    '400px',
    '1000px'
  )}
  }
`

const IndexPage = () => {
  const [isInViewport, animatedDiv] = useIsInViewport()
  const [loaded, setLoaded] = useState(false)

  const fadeIn = useSpring({
    config: config.molasses,
    delay: 250,
    from: {
      opacity: 0,
      transform: 'translateY(100px)'
    },
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0px)' : 'translateY(100px)'
  })

  useEffect(() => {
    if (loaded || !isInViewport) return
    setLoaded(true)
  }, [isInViewport])

  return (
    <>
      <SEO title="James &amp; Sophie's Wedding: 31 October 2020" />
      <HeaderSplash />
      <LayoutSplash>
        <Container>
          <animated.div ref={animatedDiv} style={fadeIn}>
            <h2>31 October 2020</h2>
            <P narrow>
              Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
              turpis non, accumsan imperdiet orci oun cuaamsan.
            </P>
            <Link to="/wedding">More about our big day &rarr;</Link>
          </animated.div>
        </Container>
      </LayoutSplash>
    </>
  )
}

export default IndexPage
