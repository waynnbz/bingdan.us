import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'

function Pagination({ bingsPerPage, totalBings, paginate, currentPage }) {
  const totalPages = Math.ceil(totalBings / bingsPerPage)
  const pageNumbers = [...Array(totalPages).keys()].map((p) => p + 1)

  return (
    <div className='pagination'>
      <a
        onClick={() => paginate(Math.max(currentPage - 1, 1))}
        href={`#${currentPage - 1}`}
        className='page-link'
      >
        <RiArrowDropLeftLine />
      </a>
      {pageNumbers.map((number) => (
        <ul className='page-item' key={`p${number}`}>
          <a
            onClick={() => paginate(number, 1)}
            href={`#${number}`}
            className={`${
              currentPage === number ? 'page-active' : ''
            } page-link`}
          >
            {number}
          </a>
        </ul>
      ))}

      <a
        onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
        href={`#${currentPage + 1}`}
        className='page-link'
      >
        <RiArrowDropRightLine />
      </a>
    </div>
  )
}

export default Pagination
