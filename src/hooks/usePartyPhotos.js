import { graphql, useStaticQuery } from 'gatsby'

const usePartyPhotos = () => {
  const members = useStaticQuery(graphql`
    query {
      mike: file(relativePath: { eq: "party/mike.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillymike: file(relativePath: { eq: "party/silly/mike.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dave: file(relativePath: { eq: "party/dave.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillydave: file(relativePath: { eq: "party/silly/dave.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nick: file(relativePath: { eq: "party/nick.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillynick: file(relativePath: { eq: "party/silly/nick.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      oli: file(relativePath: { eq: "party/oli.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillyoli: file(relativePath: { eq: "party/silly/oli.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      andy: file(relativePath: { eq: "party/andy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillyandy: file(relativePath: { eq: "party/silly/andy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      scott: file(relativePath: { eq: "party/scott.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillyscott: file(relativePath: { eq: "party/silly/scott.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      emily: file(relativePath: { eq: "party/emily.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillyemily: file(relativePath: { eq: "party/silly/emily.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      becky: file(relativePath: { eq: "party/becky.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillybecky: file(relativePath: { eq: "party/silly/becky.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ellie: file(relativePath: { eq: "party/ellie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillyellie: file(relativePath: { eq: "party/silly/ellie.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      emma: file(relativePath: { eq: "party/emma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillyemma: file(relativePath: { eq: "party/silly/emma.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lucy: file(relativePath: { eq: "party/lucy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillylucy: file(relativePath: { eq: "party/silly/lucy.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mandy: file(relativePath: { eq: "party/mandy.png" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sillymandy: file(relativePath: { eq: "party/silly/mandy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 295, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return members
}

export default usePartyPhotos
