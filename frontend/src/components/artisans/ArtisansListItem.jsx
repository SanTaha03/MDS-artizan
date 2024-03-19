import PropTypes from 'prop-types'
import './ArtisansList.css'

function ArtisansListItem ({ artisan }) {
  const { name, description, slug, profilePicture } = artisan.attributes
  const imgUrl = 'http://localhost:1337' + profilePicture?.data?.attributes?.url
  return (
    <a className='card' href={`/artisans/${slug}`}>

      <img src={imgUrl} className='profile-picture' />
      <h3>{name}</h3>
      <p>{description}</p>

    </a>

  )
}
ArtisansListItem.propTypes = {
  artisan: PropTypes.object
}
export default ArtisansListItem
