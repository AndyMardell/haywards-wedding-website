import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'
const AnimatedImg = animated(Img)

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;

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
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "party" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 295) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const trail = useTrail(allFile.edges.length, {
    from: {
      opacity: 0,
      x: 20,
      height: 0
    },
    opacity: 1,
    x: 0,
    height: 80,
    delay: 1500
  })

  return (
    <StyledGallery>
      {trail.map(({ x, height, ...rest }, index) => (
        <AnimatedImg
          key={index}
          fluid={allFile.edges[index].node.childImageSharp.fluid}
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
