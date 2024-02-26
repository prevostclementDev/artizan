import PropTypes from 'prop-types'

function ProductsListItem ({ product }) {
  const { name, description, images } = product.attributes
  const imgUrl = 'http://localhost:1337' + images?.data[0]?.attributes?.url
  return (
    <div className='card'>
      <img
        src={imgUrl}
        className='product-picture'
      />
      <div className='card-body'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductsListItem 