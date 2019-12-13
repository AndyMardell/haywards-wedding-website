import React, { useContext, useState } from 'react'
import Context from '../context'
import Img from 'gatsby-image'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'
import useWeddingParty from '../hooks/useWeddingParty'

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

const GalleryItem = styled(animated.div)`
  position: relative;
`

const Bio = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin-bottom: 0;
  }

  h4,
  p {
    color: white;
    text-align: center;
  }

  p {
    padding: 0 2rem;
  }
`

const PartyGallery = () => {
  const [hover, setHover] = useState(false)
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
        <GalleryItem
          key={index}
          onMouseOver={() => setHover(index)}
          onMouseLeave={() => setHover(false)}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        >
          {hover === index && (
            <Bio>
              <h4>{members[index].name}</h4>
              <p>{members[index].bio}</p>
            </Bio>
          )}
          <Img
            fluid={members[index].image}
            style={{
              display: context.sillyMode ? 'none' : 'block'
            }}
          />
          <Img
            fluid={members[index].sillyImage}
            style={{
              display: context.sillyMode ? 'block' : 'none'
            }}
          />
        </GalleryItem>
      ))}
    </StyledGallery>
  )
}

export default PartyGallery
