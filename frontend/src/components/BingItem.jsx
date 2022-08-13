import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteBing } from '../features/bings/bingSlice'

function BingItem({ bing }) {
  const dispatch = useDispatch()
  const elStyle = useRef(null)
  // const [elStyle, setElStyle] = useState(null)

  const onRemove = () => {
    elStyle.current = {
        animationName: 'disappear',
        animationDuration: '.6s',
        animationTimingFunction: 'cubic-bezier(.53,-0.17,.91,-0.2)',
    }
  //   setElStyle({
  //     animationName: 'disappear',
  //     animationDuration: '.6s',
  //     animationTimingFunction: 'cubic-bezier(.53,-0.17,.91,-0.2)',
  // })

    dispatch(deleteBing(bing._id))
  }

  return (
    //FIXME: replace the css
    <div style={elStyle.current} className='task'>
      <div className='content'>
        <div className='left'>{bing.text}</div>
      </div>
      {/* <div className='time'>{new Date(bing.createdAt).toLocaleString('en-US')}</div> */}
      <button
        className='right'
        onClick={() => {
          onRemove()
        }}
      >
        X
      </button>
    </div>
  )
}

export default BingItem
