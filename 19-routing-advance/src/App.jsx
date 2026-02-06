 import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Route, Routes } from "react-router-dom";
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import ContactUsPage from './pages/ContactUsPage';
 
 
 const App = () => {
   return (
     <div className='h-screen bg-black text-white'>
        <Navbar/>
        
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>} />
            <Route path='/product' element = {<Product/>}> 
                <Route path='men' element = {<Men/>} />
                <Route path='women' element = {<Women/>} />
                <Route path='kids' element = {<Kids/>} />
            </Route>

            <Route path='/contact' element = {<Contact/>} />
            <Route path='/contact/:id'  element ={<ContactUsPage/>} />
            <Route path='*' element = {<NotFound/>} />
          </Routes>
          
        <Footer/>
     </div>
   )
 }
 
 export default App