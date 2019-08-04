import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout margin={false} footer={false} main={false}>
    <SEO title="Page not found - James &amp; Sophie" />
    <div className='u-flex  u-flex--justify-center  u-flex--align-center  u-height--full'>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
