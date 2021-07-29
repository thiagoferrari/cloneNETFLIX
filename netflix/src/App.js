import React, { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow'
import Tmdb from './Tmdb'
import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])


  return (
    <div className='page'>
      {/* Header
      Destaque
      As LISTAS
      Rodapé */}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}