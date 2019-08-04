import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useTrail, animated } from 'react-spring'
const AnimatedImg = animated(Img)

const PartyGallery = () => {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "party"}}) {
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
    opacity: show ? 1 : 0,
    x: show ? 0 : 20,
    height: show ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  })

  return (
    <div className='party-gallery'>
      {trail.map(({ x, height, ...rest }, index) => (
        <AnimatedImg
          key={index}
          fluid={allFile.edges[index].node.childImageSharp.fluid}
          style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
        />
      ))}
    </div>
  )
}

export default PartyGallery
