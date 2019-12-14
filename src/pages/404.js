import React from 'react'
import BlankLayout from '../layouts/blank'
import SEO from '../components/seo'
import styled from 'styled-components'
import P from '../components/paragraph'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`

const NotFoundPage = () => (
  <BlankLayout>
    <SEO title="Page not found" />
    <Container>
      <div>
        <h1>Not Found</h1>
        <P narrow>
          You just tried to find a page that doesn&#39;t exist... the sadness.
        </P>
      </div>
    </Container>
  </BlankLayout>
)

export default NotFoundPage
