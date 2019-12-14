import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import Image from '../components/image'
import Intro from '../components/intro'
import Content from '../components/content'
import Info from '../components/info'
import Block from '../components/block'
import { animated } from 'react-spring'
import useIsInViewport from 'use-is-in-viewport'
import useAnimate from '../hooks/useAnimate'
import P from '../components/paragraph'

const AnimatedBlock = animated(Block)
const AnimatedImage = animated(Image)

const Wedding = () => {
  const fadeIn = useAnimate()
  const notesRef = useRef(null)
  const [isInViewport, wrappedNotesRef] = useIsInViewport({
    target: notesRef,
    modBottom: '-10%'
  })
  const fadeInTrigger = useAnimate({ trigger: isInViewport })

  return (
    <Layout>
      <SEO title="The Wedding – James &amp; Sophie" />
      <Intro>
        <h1>The Wedding</h1>
        <P narrow>
          All the important information you&apos;ll need to know before joining
          us on our wedding day.
        </P>
      </Intro>
      <AnimatedImage style={fadeIn(250)} file="rings" height={300} />
      <Content css="margin-top: 2em" columns top>
        <AnimatedBlock style={fadeIn(500)}>
          <h3>Ceremony</h3>
          <p>
            If day guests could please arrive at 12pm to be seated for a 1pm
            ceremony. You can find the address below; further information can be
            found on the <Link to="venue">Venue &amp; travel</Link> page.
          </p>
          <Info>
            1pm on 31 October 2020
            <br />
            Bury Manor Barn, West Sussex, RH20 1PB
            <br />
            <Link to="venue">Map & Directions &rarr;</Link>
          </Info>
        </AnimatedBlock>
        <AnimatedBlock style={fadeIn(750)}>
          <h3>Reception</h3>
          <p>
            Evening guests are welcome to join in the celebrations from 7pm. The
            reception will take place at the same venue as the ceremony. For
            more information, visit the{' '}
            <Link to="venue">Venue &amp; travel</Link> page.
          </p>
          <Info>
            7pm on 31 October 2020
            <br />
            Bury Manor Barn, West Sussex, RH20 1PB
            <br />
            <Link to="venue">Map & Directions &rarr;</Link>
          </Info>
        </AnimatedBlock>
        <AnimatedBlock style={fadeInTrigger(0)}>
          <h3 ref={wrappedNotesRef}>Important Notes</h3>
          <p>
            Our venue has a few requests that we ask that our guests please take
            note of:
          </p>
          <Info>
            <ol>
              <li>No stiletto heels</li>
              <li>No paper or plastic confetti</li>
              <li>Cash only bar</li>
              <li>No little ones in the daytime</li>
            </ol>
          </Info>
        </AnimatedBlock>
        <AnimatedBlock style={fadeInTrigger(250)}>
          <h3>RSVP</h3>
          <p>
            Information regarding RSVP&apos;s can be found on your invites,
            please respond by <strong>31st August 2020</strong> at the latest,
            and be sure to include any dietary requirements you have.
          </p>
          <Info>
            RSVP Deadline:
            <br />
            <strong>31st August 2020</strong>
          </Info>
        </AnimatedBlock>
      </Content>
    </Layout>
  )
}

export default Wedding
