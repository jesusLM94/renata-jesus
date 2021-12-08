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
import { InvitationContext } from '../helpers/contexts'
import { guestList } from '../helpers/guestList'
import smoothscroll from 'smoothscroll-polyfill'
import '../assets/styles/index.scss'

const IndexPage = (props) => {
  // kick off the polyfill for smooth scrolling
  smoothscroll.polyfill()

  const inviteId = props.location?.search?.slice(12)
  const person = guestList[inviteId]
  const hasInvitation = person !== undefined

  return (
    <main className="base-styles">
      <title>Home Page</title>
      <Seo />
      <InvitationContext.Provider value={{ person, hasInvitation }}>
        <Header />
        <HeroImage />
        <Welcome />
        <Invitation />
        <WhenAndWhere />
        <Dresscode />
        <Timeline />
        <GiftTable />
        <Confirmation />
        <Footer />
      </InvitationContext.Provider>
    </main>
  )
}

export default IndexPage
