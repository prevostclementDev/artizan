import PropTypes from 'prop-types'

function ArtisansListItem ({ artisan }) {
  console.log(artisan)
  const { name, description, profilePicture } = artisan.attributes
  const imgUrl = 'http://localhost:1337' + profilePicture?.data?.attributes?.url
  return (
    <div className='card'>
      <img
        src={imgUrl}
        className='profile-picture'
      />
      <div className='card-body'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

ArtisansListItem.propTypes = {
  artisan: PropTypes.object
}

export default ArtisansListItem