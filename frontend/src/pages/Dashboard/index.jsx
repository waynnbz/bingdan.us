// import Sky from '../_Sky'
// import '../_App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BingForm from '../../components/BingForm'
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
    }

    dispatch(getBings())

    return () => {
      dispatch(reset())
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
    </>
  )
}

export default Dashboard
