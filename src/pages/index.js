import * as React from 'react'
import Header from '../components/header'
import HeroImage from '../components/heroImage'
import WhenAndWhere from '../components/whenAndWhere'
import Dresscode from '../components/dressCode'
import GiftTable from '../components/giftTable'
import Footer from '../components/footer'
import Invitation from '../components/invitation'
import Welcome from '../components/welcome'
import Timeline from '../components/timeline'
import SEO from '../components/seo'
import '../assets/styles/index.scss'

const IndexPage = (props) => {
  const inviteId = props.location?.search?.slice(12)

  return (
    <main className="base-styles">
      <title>Home Page</title>
      <SEO />
      <Header />
      <HeroImage />
      <Welcome />
      <Invitation inviteId={inviteId} />
      <WhenAndWhere />
      <Timeline />
      <Dresscode />
      <GiftTable />
      <Footer />
    </main>
  )
}

export default IndexPage
