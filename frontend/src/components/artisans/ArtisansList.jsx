import PropTypes from 'prop-types'
import ArtisansListItem from './ArtisansListItem'

function ArtisansList ({ artisans }) {
  if (!artisans || artisans.length < 1) {
    return 'No data'
  }
  return (
    <>
      <h2>Artisans List</h2>
      {
        artisans.map(artisan => (
          <ArtisansListItem key={artisan.id} artisan={artisan} />
        ))
      }
    </>
  )
}

ArtisansList.propTypes = {
  artisans: PropTypes.arrayOf(PropTypes.object)
}

export default ArtisansList