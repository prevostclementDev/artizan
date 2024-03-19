import { Card, CardBody, CardHeader } from '@nextui-org/react'
import PropTypes from 'prop-types'

function ProductsListItem ({ product }) {
  const { name, description, price, images } = product.attributes
  const imgUrl = process.env.REACT_APP_IMAGES_URL + images?.data[0]?.attributes?.url
  return (
    <Card>
      <CardHeader className='p-0'>
        <img
          src={imgUrl}
        />
      </CardHeader>
      <CardBody className='flex flex-col gap-4 justify-between'>
        <h3 className='font-semibold text-xl'>{name}</h3>
        <p>{description}</p>
        <p className='text-right'>{price} €</p>
      </CardBody>
    </Card>
  )
}

ProductsListItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductsListItem
