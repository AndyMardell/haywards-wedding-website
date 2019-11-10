import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import PartyGallery from '../components/partyGallery'
import Intro from '../components/intro'
import P from '../components/paragraph'

const WeddingParty = () => (
  <Layout>
    <SEO title="Wedding Party – James &amp; Sophie" />
    <Intro>
      <h1>Wedding Party</h1>
      <P narrow>
        Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
        turpis non, accumsan imperdiet orci oun cuaamsan.
      </P>
    </Intro>
    <PartyGallery />
  </Layout>
)

export default WeddingParty
