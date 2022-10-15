import Navbar from "./Navbar";
import React from 'react'
import Hero from "./Hero";
import Hours from "./Hours";
import Footer from "./Footer";


export default function Home(props) {
  return (
   <>
  <Navbar nav = {props.nav} />
    <Hero />
   <Hours />
   <Footer />
   </>
  )
}
