import React from 'react'
import Fade from '../transitions/fade'
import Layout from '../layouts'
import SEO from '../components/seo'
import HeaderSplash from '../components/headerSplash'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeaderSplash />
    <Layout
      header={false}
      footer={false}
      main={false}
      splash
    >
      <div className='[ u-flex  u-flex--justify-center  u-flex--align-center ]  u-height--full'>
        <div className='u-align--center  u-pad--small'>
          <h2>Tying the Knot</h2>
          <p className='u-width--narrower'>Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet turpis non, accumsan imperdiet orci oun cuaamsan.</p>
          <Fade to="/page-2/">More about our big day &rarr;</Fade>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
