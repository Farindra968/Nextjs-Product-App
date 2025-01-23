"use client";
import React, { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import SidebarModul from "../Ui/SidebarModul";
import { TbFilterCog } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const ProductFilterSidebar = () => {
  const [showFilter, setShowFilter] = useState();


  return (
    <div className="">
      <button onClick={() => setShowFilter(true)} className="text-primary-600">
      <TbFilterCog />
      </button>
      <SidebarModul show={showFilter} setShow={setShowFilter} title="Filter">
        <div className="py-6">
          <div>
            <label htmlFor="sort" className="font-poppins-medium text-primary-900 dark:text-gray-200 " >Sort By:</label>
            <div className="w-full rounded-md my-2 py-4 bg-white border border-primary-300 focus:outline-none relative">
              <CiSearch className="absolute top-2 left-2" />
              <input type="text" name="search" id="search" placeholder="Search Product" className="w-full text-sm rounded-md py-1 pl-8 border-none bg-transparent focus:outline-none absolute top-0.5" />
            </div>
          </div>
          <div>
            <label htmlFor="sort" className="font-poppins-medium text-primary-900 dark:text-gray-200 " >Sort By:</label>
            <select name="sort" id="sort" className="w-full rounded-md my-2 py-1 border border-primary-300 focus:outline-none">
              <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
              <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
              <option value={JSON.stringify({ price: -1 })}>High to Low</option>
              <option value={JSON.stringify({price:1})}>Low to High</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          {/* Submit and Cancel Buttom */}
          <div className="flex justify-between gap-4 mt-4">
            <button onClick={()=>setShowFilter(false)} className="bg-secondary-600 text-white px-4 py-2 rounded font-poppins-semibold">Cancel</button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded font-poppins-semibold">Submit</button>
          </div>
        </div>
      </SidebarModul>
      </div>
  );
};

export default ProductFilterSidebar;
