import { useEffect, useState } from 'react'
import heartCookie from '../../assets/valentines-cookie-svgrepo-com.svg'
import './styles.css'

function BingFlow() {
  // const flyBings = useRef([])
  const [flyBings, setFlyBings] = useState([])

  const generateBings = () => {
    let top = Math.floor(Math.random() * 75 + 8) + '%'
    let dim = Math.floor(Math.random() * 80 + 25) + 'px'
    let index = Math.ceil(Math.random() * 2)
    let velocity = Math.floor(Math.random() * 50 + 10) + 's'
    console.log(top, dim, index, velocity)
    let style = {
      top: top,
      height: dim,
      zIndex: index,
      animationDuration: velocity,
      animationTimingFunction: 'linear',
      animationName: 'cloud',
      animationDelay: '0',
      position: 'absolute',
      padding: '0',
      margin: '0',
      left: '-100px',
      visibility: 'hidden',
      opacity: '0.78',
    }

    // flyBings.current.push(style)
    setFlyBings((prevBings) => [...prevBings, style])
  }

  useEffect(() => {
    console.log('EFFFFFFECT')

    for (let i = 0; i < 24; i++) generateBings()

    setInterval(() => generateBings(), 1560)
  }, [])

  return (
    <div className='bings-flow'>
      {flyBings.map((e, i) => {
        return <img className='fly-bing' style={e} key={i} src={heartCookie} alt='bingggg' />
      })}
    </div>
  )
}

export default BingFlow
