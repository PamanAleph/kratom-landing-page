import Header from '@/components/main/Header'
import StoreSection from '@/components/store/StoreSection'
import React from 'react'

export default function page() {
  return (
    <section>
      <Header page='store'/>
      <StoreSection/>
    </section>
  )
}
