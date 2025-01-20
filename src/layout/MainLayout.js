"use client";

import HeaderCategories from "@/components/HeaderCategories";
import MainHeader from "@/components/MainHeader";
import TopHeader from "@/components/TopHeader";
import { persistor, store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MainLayout = ({ children }) => {
  return (
    <Provider store={store}>
            <PersistGate persistor={persistor}>

      <TopHeader />
      <div className="w-full z-50 sticky top-0 bg-white dark:bg-gray-800">
        <MainHeader />
      </div>
      <HeaderCategories />
        {children}
        </PersistGate>
    </Provider>
  );
};

export default MainLayout;
