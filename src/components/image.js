import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'

const AnimatedImg = animated(Img)

const Image = ({
  file,
  height,
  className,
  absolute,
  style,
  objectPosition,
  scale,
}) => {
  const data = useStaticQuery(graphql`
    query {
      autumn: file(relativePath: { eq: "autumn-leaves.jpg" }) {
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

  const springProps = useSpring({
    config: {
      tension: 250,
      friction: 1000,
    },
    from: { transform: 'scale(1)' },
    transform: 'scale(1.15)',
  })

  const finalProps = {
    className: className,
    fluid: data[file].childImageSharp.fluid,
    objectPosition: objectPosition,
    style: {
      ...style,
      position: absolute ? 'absolute' : 'relative',
      height: height && `${height}px`,
    },
  }

  if (scale) {
    return (
      <AnimatedImg
        {...finalProps}
        style={{ ...finalProps.style, ...springProps }}
      />
    )
  }

  return <Img {...finalProps} />
}

Image.propTypes = {
  file: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  height: PropTypes.number,
  absolute: PropTypes.bool,
  objectPosition: PropTypes.string,
  scale: PropTypes.bool,
}

export default Image
