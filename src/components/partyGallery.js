import React, { useContext } from 'react'
import Context from '../context'
import Img from 'gatsby-image'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'
import useWeddingParty from '../hooks/useWeddingParty'
const AnimatedImg = animated(Img)

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -1.5em;

  & > div {
    width: 25%;
    flex-grow: 1;
    margin: 2%;

    @media only screen and (max-width: 700px) {
      width: 45%;
    }
  }
`

const PartyGallery = () => {
  const { context } = useContext(Context)
  const members = useWeddingParty()

  const trail = useTrail(members.length, {
    from: {
      opacity: 0,
      x: 20,
      height: 0
    },
    opacity: 1,
    x: 0,
    height: 80,
    delay: 400
  })

  return (
    <StyledGallery>
      {trail.map(({ x, height, ...rest }, index) => (
        <AnimatedImg
          key={index}
          fluid={members[index][context.sillyMode ? 'sillyImage' : 'image']}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        />
      ))}
    </StyledGallery>
  )
}

export default PartyGallery
