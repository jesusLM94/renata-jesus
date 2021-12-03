import * as React from 'react'
import Header from '../components/header'
import HeroImage from '../components/heroImage'
import WhenAndWhere from '../components/whenAndWhere'
import Dresscode from '../components/dressCode'
import GiftTable from '../components/giftTable'
import Footer from '../components/footer'
import Invitation from '../components/invitation'
import Welcome from '../components/welcome'
import '../assets/styles/index.scss'
import SEO from '../components/seo'

const IndexPage = (props) => {
  const inviteId = props.location?.search?.slice(12)

  return (
    <main className="base-styles">
      <title>Home Page</title>
      <Header />
      <HeroImage />
      <Welcome />
      <Invitation inviteId={inviteId} />
      <WhenAndWhere />
      <Dresscode />
      <GiftTable />
      <Footer />
      <SEO />
    </main>
  )
}

export default IndexPage
