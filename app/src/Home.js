import Navbar from "./Navbar";
import React from 'react'
import Hero from "./Hero";
import Hours from "./Hours";
import Footer from "./Footer";
import DiningRoom from "./DiningRoom";


export default function Home(props) {
  return (
   <>
    <Hero />
   <Hours />
   <DiningRoom  />
   <Footer />
   </>
  )
}
