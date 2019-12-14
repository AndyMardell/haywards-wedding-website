import React, { useRef } from 'react'
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

const AnimatedImage = animated(Image)
const AnimatedBlock = animated(Block)

const Venue = () => {
  const fadeIn = useAnimate()
  const travelRef = useRef(null)
  const [isInViewport, wrappedRef] = useIsInViewport({
    target: travelRef,
    modBottom: '-10%'
  })
  const fadeInTrigger = useAnimate({ trigger: isInViewport })

  return (
    <Layout>
      <SEO title="Venue &amp; Travel" />
      <Intro>
        <h1>Venue &amp; Travel</h1>
        <P narrow>
          Our venue is located at Dorset House School in Pulborough, West
          Sussex. Please find a map and directions below, we will also place
          signs down the country lane to help guide you on the day.
        </P>
      </Intro>
      <AnimatedImage style={fadeIn(250)} height={350} file="dorsetHouse" />
      <Content css="margin-top: 2em;" columns>
        <AnimatedBlock style={fadeIn(500)}>
          <h3>Directions</h3>
          <p>
            If you are using a satnav for directions, you will be directed to
            Dorset House School. This is correct so don&apos;t worry about going
            to the wrong place! Our venue is located inside the school grounds,
            off a small country lane.
          </p>
          <Info>
            <strong>Bury Manor Barn</strong>
            <br />
            The Manor, Church Lane
            <br />
            Bury, Pulborough
            <br />
            West Sussex RH20 1PB
          </Info>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//Dorset+House+School,+Church+Ln,+Bury,+Pulborough+RH20+1PB/@50.9087757,-0.5573712,16.85z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4875b0a1bdc6e4b1:0x77acae92c51b79f1!2m2!1d-0.555214!2d50.908556!3e0"
          >
            Get directions &rarr;
          </a>
        </AnimatedBlock>
        <AnimatedBlock style={fadeIn(750)}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81124.9118791682!2d-0.6254395201308203!3d50.90865390973439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzMxLjEiTiAwwrAzMycxNy41Ilc!5e0!3m2!1sen!2suk!4v1564734402227!5m2!1sen!2suk"
            width="600"
            height="450"
            frameBorder="0"
            style={{
              border: 0,
              width: '100%',
              height: '350px'
            }}
            allowFullScreen
          />
        </AnimatedBlock>
      </Content>
      <Content narrow>
        <AnimatedBlock style={fadeInTrigger()}>
          <h3 ref={wrappedRef}>Car Parking &amp; Taxis</h3>
          <p>
            There will be a free car park for guests, you are welcome to leave
            your cars overnight but please collect them{' '}
            <strong>before midday</strong> the next day.
          </p>
          <p>
            If you are planning on taking a taxi home, please pre-book before
            the day as there is limited signal at the venue.
          </p>
        </AnimatedBlock>
      </Content>
    </Layout>
  )
}

export default Venue
