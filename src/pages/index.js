import React from 'react'
import { Link } from 'gatsby'
import LayoutSplash from '../layouts/splash'
import SEO from '../components/seo'
import HeaderSplash from '../components/headerSplash'
import Content from '../components/content'
import styled from 'styled-components'
import P from '../components/paragraph'
import { animated } from 'react-spring'
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
  const fadeInTrigger = useAnimate({ trigger: isInViewport })

  return (
    <>
      <SEO title="James &amp; Sophie's Wedding: 31 October 2020" />
      <HeaderSplash />
      <LayoutSplash>
        <Container>
          <animated.div ref={animatedDiv} style={fadeInTrigger()}>
            <h2>31 October 2020</h2>
            <P narrow>
              We are looking forward to spending our big day with you all at
              Bury Manor Barn, click through for more information.
            </P>
            <Link to="/wedding">More about our special day &rarr;</Link>
          </animated.div>
        </Container>
      </LayoutSplash>
    </>
  )
}

export default IndexPage
