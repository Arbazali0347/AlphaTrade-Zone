import React from 'react'
import Hero from '../components/Hero'
import SignatureShowcase from '../components/Featured'
import LocationPreview from '../components/LocationPreview'
import Services from '../components/WhyChooseUs'
import YoutubeHub from '../components/YoutubeHub'
import UpcomingTestVault from '../components/UpcomingTestVault'
import CourseCadetFeature from '../components/CourseCadetFeature'
import AlphaZoneContactForm from '../components/AlphaZoneContactForm'
import FeaturesGrid from '../components/FeaturesGrid'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturesGrid/>
        <CourseCadetFeature/>
        <AlphaZoneContactForm/>
        <SignatureShowcase/>
        <YoutubeHub/>
        <Services/>
        <UpcomingTestVault/>
        <LocationPreview/>
    </div>
  )
}

export default Home