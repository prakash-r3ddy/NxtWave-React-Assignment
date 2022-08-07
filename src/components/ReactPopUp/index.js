import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {MdSort} from 'react-icons/md'
import './index.css'

const ReactPopUp = ({data, sortResourcesData}) => {
  const sortDataOnDate = () => {
    const sortedData = data.sort((a, b) => {
      const da = new Date(a.createdAt)
      const db = new Date(b.createdAt)
      return db - da
    })
    sortResourcesData(sortedData)
  }

  const sortDataOnAscending = () => {
    const sortedData = data.sort((a, b) => {
      const fa = a.title.toLowerCase()
      const fb = b.title.toLowerCase()
      if (fa < fb) {
        return -1
      }
      if (fa > fb) {
        return 1
      }
      return 0
    })
    sortResourcesData(sortedData)
  }

  const sortDataOndescending = () => {
    const sortedData = data.sort((a, b) => {
      const fa = a.title.toLowerCase()
      const fb = b.title.toLowerCase()
      if (fa < fb) {
        return 1
      }
      if (fa > fb) {
        return -1
      }
      return 0
    })
    sortResourcesData(sortedData)
  }

  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button type="button" className="trigger-button">
            <MdSort className="sort-icon" /> SORT
          </button>
        }
        position="bottom right"
      >
        <div className="sort-buttons-container">
          <button
            type="button"
            className="sort-button"
            onClick={sortDataOnDate}
          >
            Recently Added
          </button>
          <button
            type="button"
            className="sort-button"
            onClick={sortDataOnAscending}
          >
            Ascending
          </button>
          <button
            type="button"
            className="sort-button"
            onClick={sortDataOndescending}
          >
            Descending
          </button>
        </div>
      </Popup>
    </div>
  )
}
export default ReactPopUp
