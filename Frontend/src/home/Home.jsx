import React from 'react'
import Navbar  from '../components/Navbar.jsx'
import Banner  from '../components/Banner.jsx'
import FreeEvent from '../components/FreeEvent.jsx'
import Footer  from '../components/Footer.jsx'

function Home() {
  return (
    <div>
      <>
      <Navbar />
      <Banner />
      <FreeEvent />
      <Footer/>
      </>
    </div>
  )
}

export default Home
