// import Sky from '../_Sky'
// import '../_App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BingForm from '../../components/BingForm'
import BingItem from '../../components/BingItem'
import Spinner from '../../components/Spinner'
import { getBings, reset } from '../../features/bings/bingSlice'

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

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Bings Dashboard</p>
      </section>

      <BingForm />

      <section className='content'>
        {bings.length > 0 ? (
          // FIXME: replace the css
          <div className='goals'>
            {bings.map((bing) => (
              <BingItem key={bing._id} bing={bing} />
            ))}
          </div>
        ) : (
          <h3>You have not draw any bings</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
