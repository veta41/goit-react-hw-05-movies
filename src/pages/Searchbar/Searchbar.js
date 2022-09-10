import { useEffect, useState } from 'react';
import {
  SearchHeader,
  SearchBtn,
  SearchForm,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../servises/Api';

import { MoviesList } from '../../components/MoviesList/MoviesList';
//---------------------------------------------//

export default function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [searchFilmList, setSearchFilmList] = useState([]);

  const handlerInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    getSearchMovies(searchParams.get('query')).then(data => {
      setSearchFilmList(data.results);
    });
  }, [searchParams, query]);

  const handlerSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchHeader>
        <SearchForm onSubmit={handlerSubmit}>
          <SearchBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchBtn>

          <SearchInput
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={handlerInput}
            autoFocus
            placeholder="Search movie"
          />
        </SearchForm>
      </SearchHeader>
      {searchFilmList?.length ? (
        <MoviesList moviesList={searchFilmList} />
      ) : (
        <></>
      )}
    </>
  );
}
