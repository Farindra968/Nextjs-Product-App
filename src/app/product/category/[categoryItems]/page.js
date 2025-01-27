import List from '@/components/product/List';
import ProductSwitcher from '@/components/product/ProductSwitcher';
import { Title } from '@/components/Ui/Title';
import { getProductByCategory } from '@/services/api/productApi'
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import React from 'react'

const page = async () => {
    const category = (await PathParamsContext).categoryItems;

    const products = await getProductByCategory(category);
    console.log(products)
  
  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-12 py-6">
      
      <div className="flex justify-between items-center p-2 border-b-2 border-primary-300">
        <Title title='Product List' />
        <div className="flex items-center space-x-2">
          <ProductSwitcher/>

        </div>
      </div>
      <section className="flex justify-between gap-6">

        <div className="w-full">
          <List productData={products} />
        </div>
      </section>
    </section>
  )
}

export default page
