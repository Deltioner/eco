import React from 'react'
import Image from 'next/image'

function ProductItem({Product}) {
  return (
    <div>
      <Image src={Product?.attributes?.banner?.data?.attributes?.url}
      alt= 'banner-card'
       width={400}
       height={350} 
       />
       
    </div>
  )
}

export default ProductItem
