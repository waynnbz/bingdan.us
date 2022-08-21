import { useNavigate } from 'react-router-dom'
// import SmileHeart from '../../assets/heart-svgrepo-com.svg'
import CouplePic from '../../assets/hot-air.png'
import './styles.css'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className='card shadow gradient'>
      <img className='welcome-icon' src={CouplePic} alt='welcome icon heart' />
      <div className='start'>
        <div className='text'>
          <h1>我们の饼单</h1>
          <p>全部一一实现阿呜呜～</p>
        </div>
        <button
          className='add shadow'
          onClick={() => {
            navigate('/list')
          }}
        >
          draw
        </button>
      </div>
    </div>
  )
}

export default Welcome
