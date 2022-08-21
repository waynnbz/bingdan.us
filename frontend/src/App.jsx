import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css'
import BingFlow from './components/BingFlow'

function App() {
  return (
    <>
        <div className='container'>
          <Header />
          <BingFlow />
          {/* <BingFlow /> */}
          <Outlet />
        </div>
    </>
  )
}

export default App
