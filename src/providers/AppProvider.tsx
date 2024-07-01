import { QueryProvider } from './QueryProvider';
import { SelectMovieMessage } from '@/components/SelectMovieMessage';
import { HomePage } from '@/routes/home';
import { MovieDetail, loader as movieLoader } from '@/routes/movie';
import { MoviesPage } from '@/routes/movies';
import { RootLayout } from '@/routes/root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
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
]);

export function AppProvider() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}
