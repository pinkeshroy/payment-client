import React from 'react';
import MovieBannerCard from '../movieBannerCard/MovieBannerCard';
import MovieCard from '../movieCard/MovieCard';

const Homepage: React.FC = () => {
  const movie = {
    title: 'Avatar 2: The Way Of Water',
    poster: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg', 
    genre: ['Adventure', 'Sci-fi'],
    releaseDate: '20.12.2022'
  };

  const movie1 = {
    title: 'Avengers - Infinity War',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVKXRFFc9BNtpnBRWifO2r1-wzFwKfNIGsg&s', 
    duration: '2h29m',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 4.8,
    reviews: 1222
  };

  return (
    <div>
      <MovieBannerCard
        genre={movie1.genre}
        imgpath={movie1.poster}
        duration={movie1.duration}
        title={movie1.title}
        rating={movie1.rating}
        reviews={movie1.reviews}
      />
      <MovieCard
        genre={movie.genre}
        imgpath={movie.poster}
        releaseDate={movie.releaseDate}
        title={movie.title}
      />
    </div>
  );
}

export default Homepage;
