import type { MoviePagination, QueryParams } from '@/models';
import { queryParamsToSearchParams, SortParam } from '@/models';
import { useLoaderData, Outlet, NavLink } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL as string;

export async function loader() {
  const top10QueryParams: QueryParams = {
    sort: SortParam.RANK_ASC,
    pageSpec: {
      page: 1,
      perPage: 10,
    },
  };
  const searchParamsString = queryParamsToSearchParams(top10QueryParams);
  return fetch(`${API_URL}/movies?${searchParamsString}`);
}

export function MoviesPage() {
  const data = useLoaderData() as MoviePagination;

  return (
    <div className="flex min-h-0 flex-1 py-8">
      <ul className="flex-none overflow-auto text-sm">
        {data.movies.map((movie) => (
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
