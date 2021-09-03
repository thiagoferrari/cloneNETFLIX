import React, { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow'
import Tmdb from './Tmdb'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState([])
  const [blkHeader, setBlkHeader] = useState(false)

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

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  /* controlando background do scroll: */
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlkHeader(true)
      } else {
        setBlkHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    /* ?? */
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <div className='page'>

      <Header blkHeader={blkHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <div>
          Feito com <span hole='img'>☕</span> por <a href="https://github.com/thiagoferrari">Thiago Ferrari</a>
        </div>
        <div>
          Direitos Resevados à Netflix™
        </div>
        <div>
          API utilizada: <a href="https://www.themoviedb.org/documentation/api">themoviedb.org</a>
        </div>
      </footer>

      <div className='Loading'>
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" />
      </div>
    </div>
  )
}
