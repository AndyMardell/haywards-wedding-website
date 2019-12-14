import React from 'react'
import SillyButton from '../components/sillyButton'
import Layout from '../layouts'
import SEO from '../components/seo'
import PartyGallery from '../components/partyGallery'
import Intro from '../components/intro'
import P from '../components/paragraph'

const WeddingParty = () => (
  <Layout>
    <SEO title="Wedding Party" />
    <Intro>
      <h1>Wedding Party</h1>
      <P narrow>
        The lucky and extremely honoured individuals we chose to accompany us
        throughout our day!
      </P>
      <SillyButton />
    </Intro>
    <PartyGallery />
  </Layout>
)

export default WeddingParty
