import React from 'react'
import Layout from '../layouts'
import SEO from '../components/seo'
import Image from '../components/image'
import airbnb from '../images/airbnb.svg'
import hotel from '../images/hotel.svg'

const Accommodation = () => (
  <Layout>
    <SEO title="Accommodation – James &amp; Sophie" />
    <div className='intro'>
      <h1>Accommodation</h1>
      <p>
        Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
        turpis non, accumsan imperdiet orci oun cuaamsan.
      </p>
    </div>
    <Image file='accommodation' />
    <div className='content  content--columns  u-align--center'>
      <div>
        <img src={airbnb} alt='Airbnb' className='content__icon' />
        <h4>Airbnb</h4>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='#'
        >
          Visit Airbnb &rarr;
        </a>
      </div>
      <div>
        <img src={hotel} alt='Hotel' className='content__icon' />
        <h4>Hotels</h4>
        <p>
          Fusce sollicitudin congue vestibulum. Ut dui augu, luctus sit amet
          turpis non, accumsan imperdiet orci oun cuaamsan.
        </p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='#'
        >
          Visit Google Maps &rarr;
        </a>
      </div>
    </div>
  </Layout>
)

export default Accommodation
