import { getProductId } from '@/services/api/productApi';
import React from 'react'

export async function generateMetadata({ params }) {
  const id = (await params).ProductId;
  const metaData = await getProductId(id)
    
  
    return {
      title: `${metaData.name}`,
    };
  }
  
const layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
