import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import Image from '../components/image'
import Intro from '../components/intro'
import Content from '../components/content'
import Info from '../components/info'
import { animated } from 'react-spring'
import useIsInViewport from 'use-is-in-viewport'
import useAnimate from '../hooks/useAnimate'

const AnimatedImage = animated(Image)

const Wedding = () => {
  const notesRef = useRef(null)
  const [isInViewport, wrappedNotesRef] = useIsInViewport({ target: notesRef })
  const fadeIn = useAnimate()
  const fadeInTrigger = useAnimate({ trigger: isInViewport })

  return (
    <Layout>
      <SEO title="The Wedding – James &amp; Sophie" />
      <Intro>
        <h1>The Wedding</h1>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
      </Intro>
      <AnimatedImage style={fadeIn(1500)} file="driedflowers" height={200} />
      <Content columns>
        <animated.div style={fadeIn(2000)}>
          <h3>Ceremony</h3>
          <p>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <Info>
            2pm on 31 October 2020
            <br />
            Bury Manor Barn, West Sussex, RH20 1PB
            <br />
            <Link to="/venue/">Map & Directions &rarr;</Link>
          </Info>
        </animated.div>
        <animated.div style={fadeIn(2200)}>
          <h3>Reception</h3>
          <p>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <Info>
            7pm on 31 October 2020
            <br />
            Bury Manor Barn, West Sussex, RH20 1PB
            <br />
            <Link to="/venue/">Map & Directions &rarr;</Link>
          </Info>
        </animated.div>
        <animated.div ref={wrappedNotesRef} style={fadeInTrigger(0)}>
          <h3>Important Notes</h3>
          <p>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <Info>
            1. No stiletto heels
            <br />
            2. No paper or plastic confetti
            <br />
            3. Cash only bar
            <br />
            4. No having fun
          </Info>
        </animated.div>
        <animated.div style={fadeInTrigger(200)}>
          <h3>RSVP</h3>
          <p>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <Info>
            James & Sophie
            <br />
            ***REMOVED***
            <br />
            ***REMOVED***
            <br />
            ***REMOVED***
          </Info>
        </animated.div>
      </Content>
    </Layout>
  )
}

export default Wedding
