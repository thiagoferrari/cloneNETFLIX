import React from 'react'
import './Header.css'

export default ({blkHeader}) => {
	return (
		<header className={blkHeader ? 'black' : ''}>
			<div className='header--logo'>
				<a href="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" />
				</a>
			</div>
			<div className='header--user'>
				<a href="/">
					<img src="https://avatars.githubusercontent.com/u/63131457" />
				</a>
			</div>
		</header>
	)
}