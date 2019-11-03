import React from 'react'
import { Link } from 'gatsby'
import LayoutSplash from '../layouts/splash'
import SEO from '../components/seo'
import HeaderSplash from '../components/headerSplash'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import P from '../components/paragraph'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    text-align: center;
    ${fluidRange({ prop: 'padding', fromSize: '15px', toSize: '30px' }, '400px', '1000px')}
  }
`

const IndexPage = () => (
  <>
    <SEO title="James &amp; Sophie's Wedding: 31 October 2020" />
    <HeaderSplash />
    <LayoutSplash>
      <Container>
        <div>
          <h2>31 October 2020</h2>
          <P narrow>
            Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
            turpis non, accumsan imperdiet orci oun cuaamsan.
          </P>
          <Link to="/wedding">More about our big day &rarr;</Link>
        </div>
      </Container>
    </LayoutSplash>
  </>
)

export default IndexPage
