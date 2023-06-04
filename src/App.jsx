import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'

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
