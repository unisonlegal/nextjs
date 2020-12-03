import Head from 'next/head'

import HeroSection from '../components/HeroSection'
import Navbar from '../components/NavBar'


export default function Home() {
  return (

  
<>
      <Head>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css"
      />

      </Head>
      {/* <Navbar /> */}
      
      <HeroSection />
  </>  
  )
}
