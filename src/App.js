import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/home'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App