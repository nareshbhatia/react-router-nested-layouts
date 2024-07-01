import { SelectMovieMessage } from './components/SelectMovieMessage';
import { HomePage } from './routes/home';
import { MovieDetail, loader as movieLoader } from './routes/movie';
import { MoviesPage, loader as moviesLoader } from './routes/movies';
import { RootLayout } from './routes/root';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/movies',
        element: <MoviesPage />,
        loader: moviesLoader,
        children: [
          { index: true, element: <SelectMovieMessage /> },
          {
            path: '/movies/:movieId',
            element: <MovieDetail />,
            loader: movieLoader,
          },
        ],
      },
    ],
  },
];
