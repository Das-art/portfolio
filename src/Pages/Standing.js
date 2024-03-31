import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import AboutPage from '../components/AboutPage '
import SkillsPage from '../components/SkillsPage'
import EducationPage from '../components/EducationPage'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer '
import CertificatesPage from '../components/Certificate'
function Standing() {
  return (
    <div>
      <Navbar/>
      <Home />
      <AboutPage/>
      <SkillsPage/>
      <EducationPage/>
    <CertificatesPage/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Standing
