import React from 'react'
import ProductItem from './ProdcutItem'

const ProductList = ({productList}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 
    md:grid-cols-4 gap-3'>
      {productList.map(item=>(
        <div key={item?.id}>
          <ProductItem product={item} key={item?.id}/>
        </div>        
      ))}
    </div>
  )
}

export default ProductList
