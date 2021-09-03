import React, { useState } from "react";
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {
	const [scrollX, setScrollX] = useState(-400)

	/* rolagem a esquerda: */
	function handleLeft() {
		let x = scrollX + Math.round(window.innerWidth / 2)
		if (x > 0) {
			x = 0 // se for 0 quer dizer que chegamos no limite da esquerda
		}
		setScrollX(x)
	}

	/* rolagem a direita: */
	function handleRight() {
		let x = scrollX - Math.round(window.innerWidth / 2)
		let maxX = items.results.length * 150

		if ((window.innerWidth - maxX) > x) {
			x = (window.innerWidth - maxX) - 60
			/*60 para descontar o padding de next e prev*/
		}

		setScrollX(x)
	}


	return (
		<div className='movieRow'>
			<h2>{title}</h2>
			<div className='movieRow--left'>
				<NavigateBeforeIcon onClick={handleLeft} style={{ fontSize: 50 }} />
			</div>
			<div className='movieRow--right'>
				<NavigateNextIcon onClick={handleRight} style={{ fontSize: 50 }} />
			</div>

			<div className='movieRow--listarea'>
				<div className='movieRow--list' style={{
					marginLeft: scrollX,
					width: items.results.length * 150 // ajustar todos filmes em uma linha
				}}>
					{items.results.length > 0 && items.results.map((item, key) => (
						<div key={key} className='movieRow--item'>
							<img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}