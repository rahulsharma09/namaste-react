import React from 'react'
import { CDN_URL } from '../utils/constants'

const ProductCard = ({data}) => {
  return (
    <div className='product_card'>
        <img src={CDN_URL + data.info.cloudinaryImageId} height={180} width="100%" />
        <h4>{data.info.name}</h4>
        <div>
        <h4>{data.info.avgRatingString}</h4>
        <h3>{data.info.cuisines[0]}</h3>
        <h3>{data.info.costForTwo}</h3>
        </div>
        <p>{data.info.areaName}</p>
    </div>
  )
}

export default ProductCard