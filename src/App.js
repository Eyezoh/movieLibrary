import {useState, useffect} from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import MovieList from './components/MovieList'


function App() {
  const [movies, setMovies] = useState([{
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}, {
  "Title": "Star Wars: Episode VI - Return of the Jedi",
  "Year": "1983",
  "imdbID": "tt0086190",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode VII - The Force Awakens",
  "Year": "2015",
  "imdbID": "tt2488496",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode I - The Phantom Menace",
  "Year": "1999",
  "imdbID": "tt0120915",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},])
  return (
    <div className="App">
      <h1>My Movie playlist</h1>
        <main>
        <div className ='container-fluid movie-app'>
        <div className='row'>
        <MovieList movies = {movies} />

        </div>
        
        </div>
        
        </main>
      
    </div>
  );
}

export default App;
