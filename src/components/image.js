import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Image = ({ file, height, className, absolute, style }) => {
  const data = useStaticQuery(graphql`
    query {
      driedflowers: file(relativePath: { eq: "dried-flowers.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      autumn: file(relativePath: { eq: "autumn-leaves.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      burymanor: file(relativePath: { eq: "bury-manor.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accommodation: file(relativePath: { eq: "accommodation.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className={className}
      fluid={data[file].childImageSharp.fluid}
      style={{
        ...style,
        position: absolute ? 'absolute' : 'relative',
        height: height && `${height}px`
      }}
    />
  )
}

Image.propTypes = {
  file: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  height: PropTypes.number,
  absolute: PropTypes.bool
}

export default Image
