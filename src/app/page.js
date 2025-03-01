import HeroSlider from "@/components/home/HeroSlider";
import ServicesInfo from "@/components/home/ServicesInfo";
import { ProductCard } from "@/components/product/ProductCard";
import PrimaryHeading from "@/components/Ui/PrimaryHeading";
import { PRODUCT_ROUTE } from "@/constant/routes";
import { getProduct } from "@/services/api/productApi";

const Home = async ({searchParams}) => {
  const product = await getProduct(await searchParams);
  console.log(product)
  return (
    <section className="h-full dark:bg-gray-800">
      
      <div className="py-5 px-2 md:px-0 ">
        <HeroSlider />
      </div>
      <div className="max-w-screen-xl mx-auto py-10 px-2 md:px-0 ">
        <ServicesInfo/>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 px-2 md:px-0 ">
        <PrimaryHeading title='Latest product' href={`${PRODUCT_ROUTE}`}/>
        <div className="grid grid-cols-4 gap-4 py-3">
        {
          product.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
        </div>


      </div>
    </section>
  );
}


export default Home;