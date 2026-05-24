import React from 'react'
import Hero from '../components/Hero'
import SignatureShowcase from '../components/Featured'
import LocationPreview from '../components/LocationPreview'
import Services from '../components/WhyChooseUs'
import YoutubeHub from '../components/YoutubeHub'
import UpcomingTestVault from '../components/UpcomingTestVault'

const Home = () => {
  return (
    <div>
        <Hero/>
        <SignatureShowcase/>
        <YoutubeHub/>
        <Services/>
        <UpcomingTestVault/>
        <LocationPreview/>
    </div>
  )
}

export default Home