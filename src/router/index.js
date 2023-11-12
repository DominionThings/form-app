import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Table from '../components/Table'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Table/>} />
    </Routes>
  )
}

export default Router