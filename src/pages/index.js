import * as React from 'react'
import Header from '../components/header'
import HeroImage from '../components/heroImage'
import WhenAndWhere from '../components/whenAndWhere'
import Dresscode from '../components/dressCode'
import GiftTable from '../components/giftTable'
import '../assets/styles/index.scss'

const IndexPage = () => {
  return (
    <main className="base-styles">
      <title>Home Page</title>
      <Header />
      <HeroImage />
      <WhenAndWhere />
      <Dresscode />
      <GiftTable />
    </main>
  )
}

export default IndexPage
