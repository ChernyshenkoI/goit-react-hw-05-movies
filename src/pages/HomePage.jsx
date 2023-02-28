import React, { useEffect, useState } from 'react';

import { getTrendMovies } from 'service/API';
import Loader from 'service/Loader';
import styled from 'styled-components';

import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(false);
        const { results } = await getTrendMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovies();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <StyledTitle>Trending today</StyledTitle>
      <MovieList items={movies} />
    </>
  );
};

export default HomePage;

const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: purple;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
`;
