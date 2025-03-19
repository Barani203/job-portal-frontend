import React, { useEffect } from 'react'
import './Home.css'
import Hero from './Hero'
import Popular from './Popular'
import Banner from './Banner'
import About from './About'
import Teams from './Teams'
import Clients from './Clients'
import JobDetails from '../Job/JobDetails'
import SliderJob from './SliderJob'


const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
    <Hero/>
    <Popular/>
    <SliderJob/>
    <Banner/>
    <About/>
    <Teams/>
    <Clients/>
    </>
  )
}

export default Home