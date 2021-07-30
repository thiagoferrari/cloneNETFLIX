import React from 'react'
import './FeaturedMovie.css'

export default ({ item }) => {
	return (
		<div>
			<section className='featured'
				style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
				{item.original_name}
			</section>
		</div>
	)
}