import type { MoviePagination, QueryParams, Movie } from '@/models';
import { queryParamsToSearchParams, SortParam } from '@/models';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { Outlet, NavLink } from 'react-router-dom';

async function fetchMovies(queryParams: QueryParams): Promise<MoviePagination> {
  const searchParamsString = queryParamsToSearchParams(queryParams);
  const resMovies = await api.get<MoviePagination>(
    `/movies?${searchParamsString}`
  );
  return resMovies.data;
}

const baseStyles = 'container relative mx-auto max-w-screen-xl px-8 py-4';

export function MoviesPage() {
  const top10QueryParams: QueryParams = {
    sort: SortParam.RANK_ASC,
    pageSpec: {
      page: 1,
      perPage: 10,
    },
  };

  // query for top 10 movies
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', top10QueryParams],
    queryFn: async () => fetchMovies(top10QueryParams),
  });

  if (isLoading) {
    return <div className={baseStyles}>Loading...</div>;
  }

  if (error || !data) {
    return (
      <div className={baseStyles}>
        Error: {error ? error.message : 'Movies not found'}
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 py-8">
      <ul className="flex-none overflow-auto text-sm">
        {data.movies.map((movie: Movie) => (
          <li className="pb-6" key={movie.name}>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : '')}
              to={`/movies/${movie.id}`}
            >
              {movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex-1 px-6">
        <Outlet />
      </div>
    </div>
  );
}
