import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import PartyGallery from '../components/partyGallery'
import Intro from '../components/intro'

const WeddingParty = () => (
  <Layout>
    <SEO title="Wedding Party – James &amp; Sophie" />
    <Intro>
      <h1>Wedding Party</h1>
      <p>
        Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
        turpis non, accumsan imperdiet orci oun cuaamsan.
      </p>
    </Intro>
    <PartyGallery />
  </Layout>
)

export default WeddingParty
