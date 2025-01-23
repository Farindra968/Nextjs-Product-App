"use client";

import HeaderCategories from "@/components/HeaderCategories";
import MainHeader from "@/components/MainHeader";
import TopHeader from "@/components/TopHeader";
import React from "react";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { theme } = useSelector((state) => state.userPreferences);
  return (
    <main className={theme}>
      <TopHeader />
        <MainHeader  />
      <HeaderCategories />
      {children}
    </main>
  );
};

export default MainLayout;
