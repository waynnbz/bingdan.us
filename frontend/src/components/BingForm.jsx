import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBing } from '../features/bings/bingSlice'

function BingForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBing({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Bing</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Bing
          </button>
        </div>
      </form>
    </section>
  )
}

export default BingForm
