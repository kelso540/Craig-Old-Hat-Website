import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'
import About from './About/About'
import Gallery from './Gallery/Gallery'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/gallery' element={ <Gallery /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
