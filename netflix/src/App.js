import React, { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow'
import Tmdb from './Tmdb'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      /* depois de pegar lista, pegar os filmes em destaque: */
      // vou usar o filter para pegar somente as series originais NETFLIX:
      let originals = list.filter(i => i.slug === 'originals')

      // vamos sortear um filme para ser exibido entre os originals:
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      
      console.log(chosenInfo);
      /*  */
    }

    loadAll()
  }, [])


  return (
    <div className='page'>
      {/* Header
      Destaque
      As LISTAS
      Rodapé */}
      {featuredData &&
        <FeaturedMovie item={featuredData}></FeaturedMovie>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
