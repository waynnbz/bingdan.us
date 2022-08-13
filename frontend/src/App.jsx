import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BingFlow from './components/BingFlow'
import Welcome from './pages/Welcome'

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <div className='container'>
          <Header />
          {/* <BingFlow /> */}
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/list' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
