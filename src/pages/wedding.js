import React from 'react'
import Fade from '../transitions/fade'
import Layout from '../layouts'
import SEO from '../components/seo'
import Image from '../components/image'

const Wedding = () => (
  <Layout>
    <SEO title="Page two" />
    <div className='intro'>
      <h1>The Wedding</h1>
      <p>
        Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
        turpis non, accumsan imperdiet orci oun cuaamsan.
      </p>
    </div>
    <Image file='driedflowers' height={200} />

    <Fade to="/">Go back to the homepage</Fade>
  </Layout>
)

export default Wedding
