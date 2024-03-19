import PropTypes from 'prop-types'

function ArtisansListItem ({ artisan }) {
  const { name, description, slug, profilePicture } = artisan.attributes
  const imgUrl = process.env.REACT_APP_IMAGES_URL + profilePicture?.data?.attributes?.url
  return (
    <a className='card' href={`/artisans/${slug}`}>
      <img
        src={imgUrl}
        className='profile-picture'
      />
      <div className='card-body'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  )
}

ArtisansListItem.propTypes = {
  artisan: PropTypes.object
}

export default ArtisansListItem
