import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createBing } from '../features/bings/bingSlice'

function BingForm() {
  const [text, setText] = useState('')
  const [showAdder, setShowAdder] = useState(false)

  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    if (text) {
      dispatch(createBing({ text }))
      setText('')
    } else {
      toast.error('空气饼哒咩🙅')
    }
  }

  return (
    // <section className='form'>
    //   <form onSubmit={onSubmit}>
    //     <div className='form-group'>
    //       <label htmlFor='text'>莹莹画张饼儿吧..</label>
    //       <input
    //         type='text'
    //         name='text'
    //         id='text'
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <button className='btn btn-block' type='submit'>
    //         Add Bing
    //       </button>
    //     </div>
    //   </form>
    // </section>
    <div className='addControls'>
      <form
        className={showAdder ? 'appear bing-form' : 'bing-form'}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit(e)}
      >
        <input
          className='input shadow'
          type='text'
          id='text'
          value={text}
          placeholder={(user?.name || '') + ` 画张饼儿吧...`}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{ margin: '0 4px' }}
          onClick={(e) => onSubmit(e)}
          type='button'
        >
          add
        </button>
      </form>
      <button
        className='plusButton shadow'
        onClick={() => setShowAdder(!showAdder)}
      >
        <img
          src={require('../assets/cute_brush.svg').default}
          alt='plus'
          className='plusIcon'
        />
      </button>
    </div>
  )
}

export default BingForm
