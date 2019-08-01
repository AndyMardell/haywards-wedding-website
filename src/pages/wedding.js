import React from 'react'
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
    <div className='columns'>
      <div>
        <h3>Ceremony</h3>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
        <div className='info'>
          2pm on 31 October 2020<br />
          Bury Manor Barn, West Sussex, RH20 1PB<br />
          <a href='#'>Map & Directions &rarr;</a>
        </div>
      </div>
      <div>
        <h3>Reception</h3>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
        <div className='info'>
          7pm on 31 October 2020<br />
          Bury Manor Barn, West Sussex, RH20 1PB<br />
          <a href='#'>Map & Directions &rarr;</a>
        </div>
      </div>
      <div>
        <h3>Important Notes</h3>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
        <div className='info'>
          2pm on 31 October 2020<br />
          Bury Manor Barn, West Sussex, RH20 1PB<br />
          <a href='#'>Map & Directions &rarr;</a>
        </div>
      </div>
      <div>
        <h3>RSVP</h3>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
        <div className='info'>
          2pm on 31 October 2020<br />
          Bury Manor Barn, West Sussex, RH20 1PB<br />
          <a href='#'>Map & Directions &rarr;</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Wedding
