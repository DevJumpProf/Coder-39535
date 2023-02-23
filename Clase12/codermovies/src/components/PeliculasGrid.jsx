import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente.js";
import { PeliculasCard } from "./PeliculasCard";
import "./PeliculasGrid.css";

export function PeliculasGrid() {
  const [peliculas, setPeliculas] = useState([]);
  //useEffect

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setPeliculas(data.results);
    });
  }, []);

  return (
    <ul className="moviesGrid">
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
}
