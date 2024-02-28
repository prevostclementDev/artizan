import PropTypes from 'prop-types'
import './Artisan.css'

// { attributes } = props.attributes
function ArtisanHeader ({ attributes }) {
  const imgUrl =
  'http://localhost:1337' + attributes.profilePicture?.data?.attributes?.url

  return (
    <div className='artisan-header'>
      <div className='left-side'>
        <img
          src={imgUrl}
          className='artisan-picture'
        />
      </div>
      <div className='right-side'>
        <h1>{attributes.name}</h1>
        <p>{attributes.description}</p>
      </div>
    </div>
  )
}

ArtisanHeader.propTypes = {
  attributes: PropTypes.object
}

export default ArtisanHeader
