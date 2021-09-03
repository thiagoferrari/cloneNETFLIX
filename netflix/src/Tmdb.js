/* AQUI VAMOS FAZER OS REQUESTS PARA API: */

const API_KEY = '7d35d00110861b1f1a9452718e42d2bb';
const API_BASE = 'https://api.themoviedb.org/3';

const defaultFetch = async (endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {
    /*montando array de filmes da home:*/
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: "Originais do Netflix",
                items: await defaultFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: "Recomendados para Você",
                items: await defaultFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Em Alta",
                items: await defaultFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: "Ação",
                items: await defaultFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Comédia",
                items: await defaultFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Terror",
                items: await defaultFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: "Romance",
                items: await defaultFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentários",
                items: await defaultFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    /* função para buscar dados de filmes (destaque em expecífico) */
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) { /* esse type pode ser 'movie' ou 'tv'(series) */
            info = await defaultFetch(`/${type}/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        }

        return info;
    }
}