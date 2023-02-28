import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente.js";
import { useParams } from "react-router-dom";

import "./PeliculaDetalle.css";
//css

export const PeliculaDetalle = () => {
  const { peliculaId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${peliculaId}`).then((data) => {
      setMovie(data);
    });
  }, [peliculaId]);

  if (!movie) {
    return null;
  }
  console.log(movie);
  const urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="contenedorDetalle">
      
      <img className="col" src={urlImg} alt={movie.title} />

      <div className="peliculaDetalle col">
        <p className="item">
          <strong>Titulo :</strong>
          {movie.title}
        </p>
        <p>
          <strong>Generos :</strong>
          {movie.genres.map((genre) => genre.name).join(" / ")}
        </p>
        <p>
          <strong>Description :</strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
