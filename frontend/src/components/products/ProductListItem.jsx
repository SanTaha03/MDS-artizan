import PropTypes from 'prop-types'

function ProductsListItem ({ product }) {
  const { name, price, images } = product.attributes
  const imgUrl = 'http://localhost:1337' + images?.data[0]?.attributes?.url

  return (
    <div className='card'>
      <img src={imgUrl} className='profile-picture' />
      <h2>{name}</h2>
      <h3 className='price'>{price} €</h3>
    </div>
  )
}
ProductsListItem.propTypes = {
  product: PropTypes.object
}

export default ProductsListItem
