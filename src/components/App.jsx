import { GlobalStyle } from './GlobalStyle';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';

import  Cast  from './Cast/Cast';
import  {Reviews}  from './Reviews/Reviews';
import { Loader } from './Loader/Loader';


const NotFound = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Searchbar = lazy(() => import('../pages/Searchbar/Searchbar'));
const MoviesDetails= lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const Home = lazy(() => import('../pages/Home/Home'));

//--------------------------------------------------------------//
export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Navigation />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader/>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={
              <Suspense fallback={<Loader/>}>
                <Searchbar />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={
              <Suspense fallback={<Loader/>}>
                <MoviesDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader/>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};