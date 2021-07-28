import React from "react";
import './MovieRow'

export default ({ title, items }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div className='movieRow--listarea'>
				{items.results.length > 0 && items.results.map((item, key) => (
					<img src={`https://image.tmdb.org/3/p/w300${item.poster_path}`} />
				))}

			</div>
		</div>
	)
}