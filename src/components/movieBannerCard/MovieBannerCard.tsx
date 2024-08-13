import React from 'react';
import "./MovieBannerCard.css";


const MovieBannerCard: React.FC<MovieBannerCardProps> = ({ title, imgpath, genre, duration, rating, reviews ,className }) => {
  return (
    <div className="movie-card">
      <img src={imgpath} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{duration} • {genre.join(', ')}</p>
        <div className="rating">
          <span>⭐ {rating}</span>
          <span>({reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default MovieBannerCard;
