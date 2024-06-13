import Header from '@/components/main/Header'
import ProductsSection from '@/components/products/ProductsSection'
import React from 'react'

export default function page() {
  return (
    <section>
      <Header page='store'/>
      <ProductsSection/>
    </section>
  )
}
