import BingItem from './BingItem'

function BingList({ bings }) {
  return (
    <div className='todo'>
      {bings.map((bing, i) => (
        <BingItem key={bing._id} bing={bing} />
      ))}
    </div>
  )
}

export default BingList
