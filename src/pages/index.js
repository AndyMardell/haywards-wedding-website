import React from 'react'
import { Link } from 'gatsby'
import LayoutSplash from '../layouts/splash'
import SEO from '../components/seo'
import HeaderSplash from '../components/headerSplash'
import Content from '../components/content'
import styled from 'styled-components'
import P from '../components/paragraph'
import { config, animated } from 'react-spring'
import useIsInViewport from 'use-is-in-viewport'
import useAnimate from '../hooks/useAnimate'

const Container = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`

const IndexPage = () => {
  const [isInViewport, animatedDiv] = useIsInViewport()
  const fadeInTrigger = useAnimate({
    trigger: isInViewport,
    config: {
      config: config.molasses,
      delay: 250,
      from: {
        opacity: 0,
        transform: 'translateY(100px)'
      },
      opacity: isInViewport ? 1 : 0,
      transform: isInViewport ? 'translateY(0px)' : 'translateY(100px)'
    }
  })

  return (
    <>
      <SEO title="James &amp; Sophie's Wedding: 31 October 2020" />
      <HeaderSplash />
      <LayoutSplash>
        <Container>
          <animated.div ref={animatedDiv} style={fadeInTrigger()}>
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
