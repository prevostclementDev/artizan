import {Button, Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react'
import PropTypes from 'prop-types'
import ArtisanAvatar from '../ArtisanAvatar'
import {useCart} from "../../contexts/cartContext.jsx";

function ProductsListItem ({ product }) {
  const { name, description, price, images, artisan } = product.attributes
  const imgUrl = (images.data) ? process.env.REACT_APP_IMAGES_URL + images?.data[0]?.attributes?.url : ''
  const showArtisan = artisan && artisan.data && artisan.data.attributes && artisan?.data?.attributes?.profilePicture

  const { addItemsInCart } = useCart()

  return (
    <Card className='flex flex-col flex-grow'>
      <CardHeader className='p-0'>
        <img
            className='h-44 w-full object-cover'
          src={imgUrl}
        />
      </CardHeader>
      <CardBody className='flex flex-col gap-4 justify-between'>
        <h3 className='font-semibold text-xl'>{name}</h3>
        <p>{description}</p>
      </CardBody>
        <CardFooter className='flex flex-row justify-between'>
            {
                showArtisan && <ArtisanAvatar artisan={artisan}/>
            }
            <div>
                <p className={`w-${showArtisan ? '1/6' : 'full'} flex justify-end text-right text-xl font-semibold`}>{price} €</p>
                <Button color='primary' className='mt-2' onPress={() => { addItemsInCart(product.id,name,price) }}>Ajouter au panier</Button>
            </div>
        </CardFooter>
    </Card>
  )
}

ProductsListItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductsListItem
