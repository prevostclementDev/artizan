import PropTypes from 'prop-types'

function ArtisansListItem ({ artisan }) {
  const { name, description } = artisan.attributes
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

ArtisansListItem.propTypes = {
  artisan: PropTypes.object
}

export default ArtisansListItem