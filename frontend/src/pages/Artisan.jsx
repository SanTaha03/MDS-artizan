import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/Api'
import ArtisanHeader from '../components/artisan/ArtisanHeader'
import ProductList from '../components/products/ProductList.jsx'
function Artisan () {
  const { artisanSlug } = useParams()

  const { response, error, loading } =
    useFetch(`${process.env.REACT_APP_BASE_URL}api/artisans?filters[slug][$eq]=${artisanSlug}&populate=* `)

  const { response: products, error: productsError, loading: productsLoading } =
    useFetch(`${process.env.REACT_APP_BASE_URL}api/products?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`)

  if (loading || productsLoading) return <h1>Chargement...</h1>

  if (error || productsError) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return response && (
    <>
      <ArtisanHeader attributes={response[0]?.attributes} />
      {
          products
            ? (
              <ProductList products={products} />
              )
            : <p>Aucun produit trouvé</p>
        }

    </>
  )
}

export default Artisan
