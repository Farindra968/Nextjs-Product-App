
import { getProduct } from "@/services/api/productApi"
import { Title } from "@/components/Ui/Title"
import Link from "next/link"
import ProductFilterSidebar from "@/components/product/ProductFilterSidebar"
import { ProductCard1 } from "@/components/product/ProductCard"
import ProductSwitcher from "@/components/product/ProductSwitcher"
import List from "@/components/product/List"

const ProductList = async ({searchParams}) => {
  const product = await getProduct( await searchParams);
  console.log(product);
  console.log(searchParams);

  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-12 py-6">
      
      <div className="flex justify-between items-center p-2 border-b-2 border-primary-300">
        <Title title='Product List' />
        <div className="flex items-center space-x-2">
          <ProductSwitcher/>
            <ProductFilterSidebar />

        </div>
      </div>
      <section className="flex justify-between gap-6">

        <div className="w-full">
          <List productData={product} />
        </div>
      </section>
    </section>
  )
}

export default ProductList

