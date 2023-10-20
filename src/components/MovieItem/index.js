import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="movie-thumbnail-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="popup-background">
              <div className="close-button-container">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose className="close-icon" />
                </button>
              </div>
              <div>
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
