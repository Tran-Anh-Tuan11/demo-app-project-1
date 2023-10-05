import React, { useState } from 'react';

function Movie() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie('');
  };

  const handleChange = (event) => {
    setNewMovie(event.target.value);
  };

  return (
    <div>
      <h1>Thêm phim yêu thích</h1>
      <input type="text" value={newMovie} onChange={handleChange} />
      <button onClick={addMovie}>Thêm phim</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
