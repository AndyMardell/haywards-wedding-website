import React from 'react'
import Fade from '../transitions/fade'
import Layout from '../layouts'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className='intro'>
      <h1>The Wedding</h1>
      <p>Welcome to page 2</p>
    </div>
    <Fade to="/">Go back to the homepage</Fade>
  </Layout>
)

export default SecondPage
