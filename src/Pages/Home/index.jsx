import { useState } from "react";
import { Card } from "../../Components/Card";
import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  const [searched, setSearchedMovie] = useState(false);
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = `https://api.themoviedb.org/3/search/movie?query=${movie}&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`;

  function handleUpdateMovie(event) {
    setMovie(event.target.value);
  }

  function handleSearchMovie() {
    setSearchedMovie(true);
    fetch(apiKey)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          onChange={handleUpdateMovie}
          value={movie}
          placeholder="Pesquise um filme..."
        />
        <button onClick={handleSearchMovie}>Pesquisar</button>
        <button>
          <Link to="/Watch-movie">Assistir um Filme</Link>
        </button>
      </div>

      <div className="movies">
        <p>(Aviso: Nem todos os filmes estão de fato disponíveis para assistir.)</p>
        <p>Para assistir a um filme, copie seu ID e vá em {"'Assistir um Filme'"}</p>

        {movies.length > 0 ? (
          movies.map((movie) => <Card key={movie.id} props={movie} />)
        ) : searched ? (
          <p>Nenhum filme encontrado</p>
        ) : (
          <p>Aguardando Busca...</p>
        )}
      </div>
    </>
  );
}
