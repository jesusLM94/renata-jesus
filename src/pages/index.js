import * as React from 'react'
import Header from '../components/header'
import HeroImage from '../components/heroImage'
import '../assets/styles/index.scss'

const IndexPage = () => {
  return (
    <main className="base-styles">
      <title>Home Page</title>
      <Header />
      <HeroImage />
    </main>
  )
}

export default IndexPage
