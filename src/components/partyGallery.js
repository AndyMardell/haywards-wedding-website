import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'

const Gallery = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    delayChildren: 100,
    staggerChildren: 100
  },
  hidden: {
    y: 20,
    opacity: 0
  }
})

const ImgContainer = posed.div({
  visible: {
    y: 0,
    opacity: 1
  },
  hidden: {
    y: 20,
    opacity: 0
  },
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
})

const PartyGallery = () => {
  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])
  const data = useStaticQuery(graphql`
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

  return (
    <Gallery className='party-gallery' pose={show ? 'visible' : 'hidden'}>
      {data.allFile.edges.map((item, i) =>
        <ImgContainer key={i}>
          <Img fluid={item.node.childImageSharp.fluid} />
        </ImgContainer>
      )}
    </Gallery>
  )
}

export default PartyGallery
