import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import HomePage from './Pages/HomePage/HomePage'
import ProductsPage from './Pages/ProductPage/ProductsPage'
import Dashbord from './Pages/Dashboard/Dashbord'
import ProductPage from './Components/HomePage/ProductPage'
import CategoryPage from './Components/HomePage/CategoryPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import AgriviewPage from './Pages/AgriviewPage/AgriviewPage'


function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/agriviews" element={<AgriviewPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:id" element={<CategoryPage/>} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
