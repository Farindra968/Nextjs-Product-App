"use client"
import HeaderCategories from '@/components/HeaderCategories'
import MainHeader from '@/components/MainHeader'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const MainLayout = () => {
  return (
    <div>
          <TopHeader />
          <MainHeader />
          <HeaderCategories/>
    </div>
  )
}

export default MainLayout
