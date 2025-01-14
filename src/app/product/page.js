import {getProduct} from '@/services/api/productApi'
import {ProductCard} from '@/components/product/ProductCard';
import { Title } from '@/components/Ui/Title';
import { TbFilterCog } from 'react-icons/tb';
import Link from 'next/link';
import { ADDPRODUCT_ROUTE } from '@/constant/routes';

 const productList = async () => {
   const product = await getProduct();
   console.log(product)
  return (
    <section className='max-w-screen-xl mx-auto px-4 lg:px-12 py-6'>
      <div className='flex justify-between items-center  p-2 border-b-2 border-primary-300'>
        <Title />
        <div className='flex items-center space-x-2'>
        <span className='text-xl text-primary-600'><TbFilterCog /></span>
        <span className='text-xl text-primary-600'><TbFilterCog /></span>
        <Link href={`${ADDPRODUCT_ROUTE}`} className='bg-primary-600 px-4 py-2 rounded-md text-primary-50 font-poppins-medium'>Add Product</Link>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
        {
          product.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>

    </section>
  )
}

export default productList
