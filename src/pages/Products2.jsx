import React from 'react'
import { Footer, Navbar, ProductsGraphql } from "../components"
import { ApolloConsumer } from '@apollo/client'
const Products2 = () => {
  return (
    <>

      <Navbar />

      <ProductsGraphql />

      <Footer />

    </>
  )
}

export default Products2