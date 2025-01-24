"use client";
import React, { useState } from "react";
import SidebarModul from "../Ui/SidebarModul";
import { TbFilterCog } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PRODUCT_ROUTE } from "@/constant/routes";
import { FaFilterCircleXmark } from "react-icons/fa6";

const ProductFilterSidebar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const [showFilter, setShowFilter] = useState();
  const [sortFilter, setSortFilter] = useState(JSON.stringify({ createdAt: -1 }));
  const [filterLimit, setFilterlimit] = useState();

  /// function to call sort
  function onchangeSort(e) {
    setSortFilter(e.target.value)
  }

  function onchangeLimit(e) {
    setFilterlimit(e.target.value)
  }

  ///Filter function 
  function productFilter() {
    const params = new URLSearchParams(searchParams.toString())
    params.set("limit", filterLimit)
    params.set("sort", sortFilter)
    
    router.push(pathname + "?" + params.toString())
    
  }

  // Filter reset function
  function resetFilter(){
     router.push(PRODUCT_ROUTE)
  }


  return (
    <div className="">
      <div className=" flex items-center gap-2">
      <button onClick={() => setShowFilter(true)} className="bg-primary-600 rounded-md w-8 h-8">
      <TbFilterCog className="mx-auto text-xl text-gray-200" />
        </button>
        <button onClick={resetFilter} className="bg-secondary-600 rounded-md w-8 h-8">
        <FaFilterCircleXmark className="mx-auto text-xl text-gray-200" />
      </button>
      </div>
      <SidebarModul show={showFilter} setShow={setShowFilter} title="Filter">
        <div className="py-6">
          <div>
            <label htmlFor="sort" className="font-poppins-medium text-primary-900 dark:text-gray-200 " >Sort By:</label>
            <div className="w-full rounded-md my-2 py-4 bg-white dark:bg-gray-700 dark:text-white border border-primary-300 focus:outline-none relative">
              <CiSearch className="absolute top-2 left-2" />
              <input type="text" name="search" id="search" placeholder="Search Product" className="w-full text-sm rounded-md py-1 pl-8 border-none bg-transparent focus:outline-none absolute top-0.5" />
            </div>
          </div>
          <div>
            <label htmlFor="sort" className="font-poppins-medium text-primary-900 dark:text-gray-200 " >Sort By:</label>
            <select onChange={onchangeSort} defaultValue={sortFilter} name="sort" id="sort" className="w-full rounded-md my-2 py-1 border dark:bg-gray-700 dark:text-white border-primary-300 focus:outline-none">
              <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
              <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
              <option value={JSON.stringify({ price: -1 })}>High to Low</option>
              <option value={JSON.stringify({price:1})}>Low to High</option>
            </select>
          </div>
          {/* Limit */}
          <div>
            <label htmlFor="limit" className="font-poppins-medium text-primary-900 dark:text-gray-200 " >Sort By:</label>
            <select onChange={onchangeLimit}  name="limit" id="limit" className="w-full rounded-md my-2 py-1 border dark:bg-gray-700 dark:text-white border-primary-300 focus:outline-none">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={30}>30</option>

            </select>
          </div>
          {/* Submit and Cancel Buttom */}
          <div className="flex justify-between gap-4 mt-4">
            <button onClick={()=>setShowFilter(false)} className="bg-secondary-600 text-white px-4 py-2 rounded font-poppins-semibold">Cancel</button>
            <button onClick={productFilter} className="bg-primary-600 text-white px-4 py-2 rounded font-poppins-semibold">Submit</button>
          </div>
        </div>
      </SidebarModul>
      </div>
  );
};

export default ProductFilterSidebar;
