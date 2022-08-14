// import Sky from '../_Sky'
// import '../_App.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BingForm from '../../components/BingForm'
import BingList from '../../components/BingList'
import Pagination from '../../components/Pagination'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [bingsPerPage, setBingsPerPage] = useState(8)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    } else {
      //TODO: is there a better structure than an else
      // plus=> I found that the dashboard components are rendered before user validity is checked and navigated
      // althought it just renders empty null data, maybe I shoud avoid this
      dispatch(getBings())

      return () => {
        dispatch(reset())
      }
    }
  }, [user, isError, message, navigate, dispatch])

  // Get current Bings
  const indexOfLastBing = currentPage * bingsPerPage
  const indexOfFirstBing = indexOfLastBing - bingsPerPage
  const currentBings = bings.slice(indexOfFirstBing, indexOfLastBing)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='card shadow gradient'>
      {/* <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Bings Dashboard</p>
      </section> */}

      {/* TODO: clean up the logic */}
      {bings.length > 0 ? (
        currentBings.length > 0 ? (
          <BingList bings={currentBings} isLoading={isLoading} />
        ) : (
          paginate(Math.max(currentPage - 1, 1))
        )
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h3>空空的。。</h3>
      )}

      {bings.length > bingsPerPage && (
        <Pagination
          bingsPerPage={bingsPerPage}
          totalBings={bings.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}

      <BingForm />
    </div>
  )
}

export default Dashboard
