import React from 'react'
import Home from './components/Pages/Home'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/Pages/About'
import Service from './components/Pages/Service'
import Blog from './components/Pages/Blog'
import Contact from './components/Pages/Contact'


export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />}/>
            <Route path='/contact' element={<Contact />}/>
            </Route>
      
        
      </Routes>
    </div>
  )
}
