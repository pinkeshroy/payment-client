import React from 'react';
import "./MovieCard.css";

import { VedeoIcon } from '../../Icons/VedeoIcon';
import { CalenderIcon } from '../../Icons/CalenderIcon';



const MovieCard: React.FC<MovieCardProps> = ({ title, imgpath, genre, releaseDate, className }) => {
  return (
    <div className={`card-movie ${className}`}>
      <img src={imgpath} alt={`${title} poster`} className="movie-image" />
      <div className="details-movie">
        <h2>{title}</h2>
        <p><VedeoIcon /> {genre.join(', ')}</p>
        <p><CalenderIcon /> {releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
