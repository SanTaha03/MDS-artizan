import PropTypes from 'prop-types'
import ProductListItem from './ProductListItem'
import './Product.css'
function ProductList ({ products }) {
  console.log(products)
  return (
    <>
      <div className='list-container'>
        <h2>Product List</h2>
        <div className='list'>
          {
                    products.map(product => (
                      <ProductListItem key={product.id} product={product} />
                    ))
                }
        </div>
      </div>
    </>

  )
}
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductList
