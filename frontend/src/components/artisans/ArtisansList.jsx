import PropTypes from 'prop-types'
import ArtisansListItem from './ArtisansListItem'
function ArtisansList ({ artisans }) {
  if (!artisans || artisans.length < 1) {
    return 'no data'
  }
  return (
    <>
      <div className='list-container'>
        <h2>ArtisansList</h2>
        <div className='list'>
          {
                artisans.map(artisan => (
                  <ArtisansListItem key={artisan.id} artisan={artisan} />
                ))
            }
        </div>
      </div>
    </>
  )
}
ArtisansList.propTypes = {
  artisans: PropTypes.arrayOf(PropTypes.object)
}

export default ArtisansList
