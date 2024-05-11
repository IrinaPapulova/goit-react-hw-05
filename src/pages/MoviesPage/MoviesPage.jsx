import { useEffect, useState } from "react";
import { getMoviesSearch } from "../../movies-api";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../componenets/SearchBar/SearchBar";
import MovieList from "../../componenets/MovieList/MovieList";
import Loading from "../../componenets/Loading/Loading";
import Error from "../../componenets/Error/Error";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const changeQuery = (newFilter) => {
    setSearchParams({ query: newFilter });
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMoviesSearch(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchBar value={query} onSubmit={changeQuery} />
      {isLoading && <Loading />}
      {error && <Error />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}