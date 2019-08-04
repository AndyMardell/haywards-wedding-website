import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import HeaderSplash from '../components/headerSplash'

const IndexPage = () => (
  <>
    <SEO title="James &amp; Sophie's Wedding: 31 October 2020" />
    <HeaderSplash />
    <Layout
      header={false}
      footer={false}
      main={false}
      splash
    >
      <div className='[ u-flex  u-flex--justify-center  u-flex--align-center ]  u-height--full'>
        <div className='u-align--center  u-pad--small'>
          <h2>31 October 2020</h2>
          <p className='u-width--narrower'>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </p>
          <Link to="/wedding">More about our big day &rarr;</Link>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
