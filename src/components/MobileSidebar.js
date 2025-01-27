"use client";
import React, { useState } from "react";
import SidebarModul from "./Ui/SidebarModul";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MobileSidebar = () => {
    const [showSidebar, setShowSidebar]= useState(false)
  return (
    <div>
      <div>
        <div onClick={()=>setShowSidebar(true)} className=" flex justify-center items-center text-3xl text-primary-700 w-10 h-10 rounded-md  bg-primary-50 ">
          <HiOutlineMenuAlt2 />
        </div>
      </div>
          <SidebarModul show={showSidebar} setShow={setShowSidebar} title="MegaMart">
              
      </SidebarModul>
    </div>
  );
};

export default MobileSidebar;
