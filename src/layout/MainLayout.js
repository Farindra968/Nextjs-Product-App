"use client"

import HeaderCategories from '@/components/HeaderCategories'
import MainHeader from '@/components/MainHeader'
import TopHeader from '@/components/TopHeader'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const MainLayout = ({children}) => {
  return (
    <Provider store={store}>
          <TopHeader />
          <div className="w-full z-50 sticky top-0 bg-white dark:bg-gray-800">
          <MainHeader/>
        </div>
          <HeaderCategories />
          {children}
    </Provider>
  )
}

export default MainLayout
