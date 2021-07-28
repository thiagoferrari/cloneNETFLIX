const API_KEY = '7d35d00110861b1f1a9452718e42d2bb'
const API_BASE = 'https://api.themoviedb.org/3'

/*
FAZER LISTAS:
originais netflix
recomendados (trending)
em alta (top rated)
ação
comédia
terror
romance
documentários
*/

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`)
	const json = await req.json()
	return json
}

export default {
	/*montando lista da home:*/
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais do Netflix',
				items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'treding',
				title: 'Recomendados para Você',
				items: await basicFetch(`/treding/all/week?&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'toprated',
				title: 'Em Alta',
				items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(`/discover/movie/?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(`/discover/movie/?with_genres35&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(`/discover/movie/?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(`/discover/movie/?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'documentary',
				title: 'Documentário',
				items: await basicFetch(`/discover/movie/?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
			},
		]
	}
}