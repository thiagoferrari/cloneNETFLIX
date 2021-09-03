import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      /* depois de pegar lista, pegar os filmes em destaque: */
      // vou usar o filter para pegar somente as series originais NETFLIX:
      let originals = list.filter(i => i.slug === 'originals');

      // vamos sortear um filme para ser exibido entre os originals:
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  /* controlando background do scroll: */
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    /* clean do useEffect */
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))

        }
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

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
        </div>
      }
    </div>
  )
}
