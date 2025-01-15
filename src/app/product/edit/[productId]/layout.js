import { getProductId } from '@/services/api/productApi';
import React from 'react'

export async function generateMetadata({ params }) {
  const id = (await params).productId;
  const metaData = await getProductId(id)
    
  
    return {
      title: `Edit : ${metaData.name}`,
    };
  }
  
const EditProduct = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default EditProduct
