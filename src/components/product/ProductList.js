import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getProducts()
  }, [])


  return (
    <section className="products">
      {
        products.map(product => {
          return (
            <div className="product" id={`product--${product.id}`}>
              <div className="product__name">
              Name: { product.productName }
              </div>
              <div className="product__price">
              Price: { product.price }
              </div>
              <div className="product__category">
              Category: { product.productTypeId }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
