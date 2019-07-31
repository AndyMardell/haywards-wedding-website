import React from 'react'
import Fade from '../transitions/fade'
import Layout from '../layouts'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Fade to="/">Go back to the homepage</Fade>
  </Layout>
)

export default SecondPage
