import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import PropTypes from 'prop-types'

const Image = ({
  file,
  height,
  className,
  absolute,
  style,
  objectPosition
}) => {
  const data = useStaticQuery(graphql`
    query {
      driedflowers: file(relativePath: { eq: "dried-flowers.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      autumn: file(relativePath: { eq: "autumn-leaves.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      autumnBranch: file(relativePath: { eq: "autumn-branch.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rings: file(relativePath: { eq: "rings.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      burymanor: file(relativePath: { eq: "bury-manor.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dorsetHouse: file(relativePath: { eq: "dorset-house.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      accommodation: file(relativePath: { eq: "accommodation.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      className={className}
      fluid={data[file].childImageSharp.fluid}
      objectPosition={objectPosition}
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
  absolute: PropTypes.bool,
  objectPosition: PropTypes.string
}

export default Image
