import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import HomePage from './Pages/HomePage/HomePage'
// import NavBar from './Components/HomePage/NavBar'
import Dashbord from './Pages/Dashboard/Dashbord'



function App() {
  return (
    <div className="app-container">
      {/* <NavBar/> */}
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/dashbord" element={<Dashbord/>}/>
          <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App
