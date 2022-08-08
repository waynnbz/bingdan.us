import {
  RiLoginCircleLine,
  RiLogoutCircleLine,
  RiUserSmileLine,
} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>我们の饼单</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className='btn' onClick={onLogout}>
                <RiLogoutCircleLine /> 出
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <RiLoginCircleLine /> 入
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <RiUserSmileLine /> 注
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
