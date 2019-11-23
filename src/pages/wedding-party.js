import React, { useContext } from 'react'
import Context from '../context'
import Layout from '../layouts'
import SEO from '../components/seo'
import PartyGallery from '../components/partyGallery'
import Intro from '../components/intro'
import P from '../components/paragraph'

const WeddingParty = () => {
  const { context, setContext } = useContext(Context)
  const toggleSillyMode = () => setContext({ sillyMode: !context.sillyMode })

  return (
    <Layout>
      <SEO title="Wedding Party – James &amp; Sophie" />
      <Intro>
        <h1>Wedding Party</h1>
        <P narrow>
          The lucky and extremely honoured individuals we chose to accompany us
          throughout our day!
        </P>
        <button onClick={toggleSillyMode}>
          {context.sillyMode ? '😜' : '🙂'}
          Silly mode - {context.sillyMode ? 'ON' : 'OFF'}
        </button>
      </Intro>
      <PartyGallery />
    </Layout>
  )
}

export default WeddingParty
