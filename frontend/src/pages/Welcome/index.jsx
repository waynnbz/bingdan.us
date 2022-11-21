import { useNavigate } from 'react-router-dom'
// import SmileHeart from '../../assets/heart-svgrepo-com.svg'
import CouplePic from '../../assets/couple.svg'
import './styles.css'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className='card shadow gradient'>
      {/* <img className='welcome-icon' src={CouplePic} alt='welcome icon heart' /> */}
      <div className='start hvr-buzz-out'>
        <div className='text'>
          <h1>Title</h1>
          <p>Sub Title</p>
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
