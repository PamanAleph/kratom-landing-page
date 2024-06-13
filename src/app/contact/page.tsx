import Contact from '@/components/contact/Contact'
import ContactWithMap from '@/components/contact/ContactWithMap'
import Header from '@/components/main/Header'
import React from 'react'

export default function page() {
  return (
    <section>
      <Header page='contact'/>
      <Contact/>
      <ContactWithMap/>
      </section>
  )
}
