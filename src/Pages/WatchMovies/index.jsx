import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function WatchMovie() {
  const [idMovie, setIdMovie] = useState(0);
  const watchMovie = `https://embedder.net/e/movie?tmdb=${idMovie}`;

  function handleUpdateMovie(event) {
    setIdMovie(event.target.value);
  }

  return (
    <div className="watch-movie">
      <div className="search">
        <input
          type="text"
          onChange={handleUpdateMovie}
          placeholder="Digite o ID do Filme..."
        />
        <button><Link to="/">Pesquisar Filmes</Link></button>
      </div>
      <div className="movie">
        <p>Aviso: Nem todos os filmes estão de fato disponíveis.</p>
        <iframe
          id="embedderContainer"
          src={watchMovie}
          width="100%"
          height="100%"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </div>
  );
}
