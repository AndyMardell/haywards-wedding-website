import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import Image from '../components/image'
import Intro from '../components/intro'
import Content from '../components/content'
import Block from '../components/block'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import airbnb from '../images/airbnb.svg'
import hotel from '../images/hotel.svg'
import { animated } from 'react-spring'
import useAnimate from '../hooks/useAnimate'
import P from '../components/paragraph'

const AnimatedBlock = animated(Block)
const AnimatedImage = animated(Image)

const Icon = styled.img`
  margin-top: 20px;
  ${fluidRange(
    {
      prop: 'height',
      fromSize: '80px',
      toSize: '130px'
    },
    '400px',
    '1000px'
  )}
`

const Accommodation = () => {
  const fadeIn = useAnimate()

  return (
    <Layout>
      <SEO title="Accommodation – James &amp; Sophie" />
      <Intro>
        <h1>Accommodation</h1>
        <P narrow>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </P>
      </Intro>
      <AnimatedImage style={fadeIn(1500)} file="accommodation" />
      <Content css="margin-top: 2em" columns>
        <AnimatedBlock center style={fadeIn(2000)}>
          <Icon src={airbnb} alt="Airbnb" />
          <h4>Airbnb</h4>
          <p>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.airbnb.co.uk/s/Bury--Pulborough-RH20-1PB--UK/homes?refinement_paths%5B%5D=%2Fhomes&search_type=filter_change&place_id=ChIJLfZjt6GwdUgRcqA74G4jIlQ&checkin=2020-10-31&checkout=2020-11-01&s_tag=Jps80IzL"
          >
            View Airbnbs &rarr;
          </a>
        </AnimatedBlock>
        <AnimatedBlock center style={fadeIn(2200)}>
          <Icon src={hotel} alt="Hotel" />
          <h4>Hotels</h4>
          <p>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/search/hotels/@50.920291,-0.6108262,12z/data=!3m1!4b1"
          >
            View Hotels &rarr;
          </a>
        </AnimatedBlock>
      </Content>
    </Layout>
  )
}

export default Accommodation
