"use client"

import React, { useEffect, useState } from 'react'
import Productslist from './Productslist'
import ProductApis from '../_utils/ProductApis'

function Products() {
  const [productslist, setProductslist] = useState([])
    useEffect(()=>{
        getLatestProducts_();
    },[])
    const getLatestProducts_=()=>{
        ProductApis.getLatestProducts().then(res=>{
            console.log(res.data.data);
            setProductslist(res.data.data)
        })
    }
  return (
    <div>
      <Productslist productslist={productslist}/>
    </div>
  )
}

export default Products
