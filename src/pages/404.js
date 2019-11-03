import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundPage = () => (
  <Layout margin={false} footer={false} main={false}>
    <SEO title="Page not found - James &amp; Sophie" />
    <Container>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
