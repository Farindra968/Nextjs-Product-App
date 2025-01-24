
import { getProduct } from "@/services/api/productApi"
import { ProductCard, ProductCard1 } from "@/components/product/ProductCard"
import { Title } from "@/components/Ui/Title"
import Link from "next/link"
import { ADDPRODUCT_ROUTE } from "@/constant/routes"
import ProductFilterSidebar from "@/components/product/ProductFilterSidebar"

const ProductList = async ({searchParams}) => {
  const product = await getProduct( await searchParams);
  console.log(product);
  console.log(searchParams);

  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-12 py-6">
      
      <div className="flex justify-between items-center p-2 border-b-2 border-primary-300">
        <Title title='Product List' />
        <div className="flex items-center space-x-2">
            <ProductFilterSidebar />

        </div>
      </div>
      <section className="flex justify-between gap-6">

        <div className="w-full">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4`}>
            {product.map((product) => <ProductCard1 key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductList

