import axios from 'axios';

const apikey = '';
const url = 'https://api.themoviedb.org/3';
const nowPlayinUrl = '${url}/movie/now_playing';
const topratedUrl = '${url}/movie/top_rated';
const movieUrl = '${url}/movie';
const genreUrl = '${url}/genre/movie/list';
const moviesUrl = '${url}/discover/movie';
const personUrl = '${url}/trending/person/week';

export const fetchMovies = async () => {
    try {
        const {data} =   await axios.get(nowPlayinUrl,{
            params: {
                api_key: apikey,
                language: 'en-US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original'
        const modifiedData = data['results'].map((m)=>({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl +  m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']
        }))
        return modifiedData;
    } catch (error) {
        
    }
}
export const fetchGenre = () => {

}
export const fetchMoviesbyGenre = () => {

}
export const fetchPersons = () => {

}
export const fetchTopRatedMovie = () => {

}
export const fetchMovieDetail = () => {

}
export const fetchMovieVideo = () => {

}
export const fetchMovieCast = () => {

}
export const SimilarMovie = () => {

}