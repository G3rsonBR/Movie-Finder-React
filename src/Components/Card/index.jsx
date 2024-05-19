import { Star, CalendarDots } from "@phosphor-icons/react";
import "./styles.css";

export function Card({ props }) {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} />
      <div className="content">
        <h2>{props.title}</h2>
        <span>
          <Star size={16} />
          {props.vote_average}
        </span>
        <span>
          <CalendarDots size={16} />
          {props.release_date}
        </span>
        <span>ID do Filme: {props.id}</span>
      </div>
    </div>
  );
}
