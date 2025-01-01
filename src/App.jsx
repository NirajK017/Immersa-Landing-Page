import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Work from "./components/Work"
import Price from "./components/Price"  
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {

  return (
        <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero/>
          <Feature/>
          <Work/>
          <Price/>
          <Testimonials/>
          <Footer/>
        </div>
        </>
  )
}

export default App
