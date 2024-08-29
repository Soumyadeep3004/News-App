import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { CategoryPage } from './CategoryPage'

export const CreateNav = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/category" element={<CategoryPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
