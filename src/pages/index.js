import * as React from 'react'
import Header from '../components/header'
import HeroImage from '../components/heroImage'
import WhenAndWhere from '../components/whenAndWhere'
import Dresscode from '../components/dressCode'
import GiftTable from '../components/giftTable'
import Confirmation from '../components/confirmation'
import Invitation from '../components/invitation'
import Welcome from '../components/welcome'
import Timeline from '../components/timeline'
import Footer from '../components/footer'
import Seo from '../components/seo'
import { guestList } from '../helpers/guestList'
import smoothscroll from 'smoothscroll-polyfill'
import '../assets/styles/index.scss'

const IndexPage = (props) => {
  const inviteId = props.location?.search?.slice(12)
  const person = guestList[inviteId]

  // kick off the polyfill for smooth scrolling
  smoothscroll.polyfill()

  return (
    <main className="base-styles">
      <title>Home Page</title>
      <Seo />
      <Header />
      <HeroImage />
      <Welcome />
      <Invitation person={person} />
      <WhenAndWhere />
      <Dresscode />
      <Timeline />
      <GiftTable />
      <Confirmation person={person} />
      <Footer />
    </main>
  )
}

export default IndexPage
