import ProductForm from "@/components/product/ProductForm";
import { getProductId } from "@/services/api/productApi";
import React from "react";

const EditProduct = async ({ params }) => {
  const id = (await params).productId;

  const product = await getProductId(id);
  return (
    <section className="max-w-screen-xl m-auto px-14 py-10">
        <div className='h-[60vh]'>
        <ProductForm isEditing={true} product={product} />
      </div>
    </section>

    
  );
};

export default EditProduct;
