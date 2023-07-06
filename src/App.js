import React, { useState } from 'react';
import axios from 'axios';

function ChuckNorrisJoke() {
  const [category, setCategory] = useState('');
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJoke();
  };

  return (
    <div className="message-box">
      <h2>Chuch Norris Jokes</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input type="text" value={category} onChange={handleInputChange} />
        </label>
        <button type="submit">Get Joke</button>
      </form>
      {joke && (
        <div className="joke-container">
        <p className="joke">{joke}</p>
        </div>
      )}
    </div>
  );
}

export default ChuckNorrisJoke;


