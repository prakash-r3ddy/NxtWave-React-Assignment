import {useState} from 'react'
import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {PageButton} from './styledComponents'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
}

const Pagination = ({data, pageHandler}) => {
  const [activeNum, setActiveNum] = useState(1)
  const pageNumbers = []
  for (let i = 1; i < Math.ceil(data.length / 6) + 1; i += 1) {
    pageNumbers.push(i)
  }

  const setActivePage = page => {
    pageHandler(page)
    setActiveNum(page)
  }

  return (
    <div className="slick-container">
      <Slider {...settings}>
        {pageNumbers.map(page => (
          <PageButton
            type="button"
            onClick={() => setActivePage(page)}
            key={page}
            isActive={activeNum === page}
          >
            {' '}
            {page}
          </PageButton>
        ))}
      </Slider>
    </div>
  )
}
export default Pagination
