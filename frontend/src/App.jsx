import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css'
import BingFlow from './components/BingFlow'

function App() {
  return (
    <>
      <BingFlow />
      <div className='container'>
        <Header />
        {/* <BingFlow /> */}
        <Outlet />
      </div>
    </>
  )
}

export default App
