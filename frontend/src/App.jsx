import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
        <div className='container'>
          <Header />
          {/* <BingFlow /> */}
          <Outlet />
        </div>
    </>
  )
}

export default App
