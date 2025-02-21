import React from 'react'
import Hero from '../components/Hero/Hero'
import Papular from '../components/popular/Papular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLwtter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero />
        <Papular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop