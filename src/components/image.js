import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Image = ({ file, height, className, absolute }) => {
  const data = useStaticQuery(graphql`
    query {
      driedflowers: file(relativePath: { eq: "dried-flowers.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rose: file(relativePath: { eq: "rose-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
        position: absolute ? 'absolute' : 'relative',
        height: height && `${height}px`
      }}
    />
  )
}

Image.propTypes = {
  file: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  absolute: PropTypes.bool
}

export default Image
