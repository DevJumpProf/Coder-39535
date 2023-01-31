import peliculas from "../peliculas.json";
import { PeliculasCard } from "../PeliculasCard";
import "./PeliculasGrid.css"

export function PeliculasGrid() {
  return (
    <ul className="moviesGrid">
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
}
