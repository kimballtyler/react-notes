import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <Routes>
        <Route path='/' element={<h1>Hi</h1>} />
        <Route path='/new' element={<h1>New</h1>} />
        <Route path='/:id' ></Route>
        <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
