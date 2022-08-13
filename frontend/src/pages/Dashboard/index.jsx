// import Sky from '../_Sky'
// import '../_App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BingForm from '../../components/BingForm'
import BingItem from '../../components/BingItem'
import Spinner from '../../components/Spinner'
import { getBings, reset } from '../../features/bings/bingSlice'
import './styles.css'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { bings, isLoading, isError, message } = useSelector(
    (state) => state.bings
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    } else {
      //TODO: is there a better structure than an else
      dispatch(getBings())

      return () => {
        dispatch(reset())
      }
    }
  }, [user, isError, message, navigate, dispatch])

  return (
    <div className='card shadow gradient'>
      {/* <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Bings Dashboard</p>
      </section> */}

      <div className='todo'>
        {bings.length > 0 ? (
          <div>
            {bings.map((bing, i) => (
              <BingItem key={bing._id} bing={bing} />
            ))}
          </div>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <h3>空空的。。</h3>
        )}
      </div>

      <BingForm />
    </div>
  )
}

export default Dashboard
