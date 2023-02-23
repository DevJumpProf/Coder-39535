import {Link} from "react-router-dom"
import "./PeliculasCard.css";

export function PeliculasCard({ pelicula }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

  return (
    <li className="movieCard">
      <Link to={`/pelicula/${pelicula.id}`}>
      <img className="movieImage" src={imgUrl} alt={pelicula.title} />
      <div>{pelicula.title}</div>
      </Link>
     
    </li>
  );
}
