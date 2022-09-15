import { GlobalStyle } from './GlobalStyle';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';

import  Cast  from './Cast/Cast';
import  {Reviews}  from './Reviews/Reviews';
import { Loader } from './Loader/Loader';
import Footer from './Footer/Footer';
import { Container } from './Navigation/Navigation.styled';




const Searchbar = lazy(() => import('../pages/Searchbar/Searchbar'));
const MoviesDetails= lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));


export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader/>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader/>}>
                <Searchbar />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId"
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
          element={<NotFound />}
        />


      </Routes>
      <Footer />
    </Container>
  );
};