import { useDispatch } from 'react-redux'
import { deleteBing } from '../features/bings/bingSlice'

function BingItem({ bing }) {
  const dispatch = useDispatch()

  return (
    //FIXME: replace the css
    <div className='goal'>
      <div>{new Date(bing.createdAt).toLocaleString('en-US')}</div>
      <h2>{bing.text}</h2>
      <button onClick={() => dispatch(deleteBing(bing._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default BingItem
