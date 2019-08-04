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
          href='https://www.airbnb.co.uk/s/Bury--Pulborough-RH20-1PB--UK/homes?refinement_paths%5B%5D=%2Fhomes&search_type=filter_change&place_id=ChIJLfZjt6GwdUgRcqA74G4jIlQ&checkin=2020-10-31&checkout=2020-11-01&s_tag=Jps80IzL'
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
          href='https://www.google.com/maps/search/hotels/@50.920291,-0.6108262,12z/data=!3m1!4b1'
        >
          Visit Google Maps &rarr;
        </a>
      </div>
    </div>
  </Layout>
)

export default Accommodation
