import React from 'react';
import Star from './Star';

const MovieCard = ({ movieName, rating, genre }) => {
  const style = {
    background: 'white',
    width: '200px',
    padding: '20px',
  };

  const fullStars = Math.round(rating / 2); // Example: 8/10 => 4 stars
  const stars = '⭐'.repeat(fullStars);
  return (
    <div style={style}>
      <h4>{movieName}</h4>
      {/* <div>
        {Array.of(10).map((star) => (
          <Star />
        ))}
      </div> */}
      {/* <p>{rating}</p> */}
      <p>
        Rating: {rating}/10 {stars}
      </p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
