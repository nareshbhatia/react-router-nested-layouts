import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Movie } from '@/models';
import { api } from '@/utils/api';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

interface Params {
  movieId: string;
}

export async function loader({ params }: LoaderFunctionArgs<Params>) {
  const resMovie = await api.get<Movie>(`/movies/${params.movieId}`);
  console.log(resMovie.data);
  return resMovie.data;
}

export function MovieDetail() {
  const movie = useLoaderData() as Movie;

  if (movie === undefined) {
    return <div>Loading...</div>;
  }

  const { name, releaseYear, ratingsSummary } = movie;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{releaseYear}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Rating: {ratingsSummary.aggregateRating}</p>
      </CardContent>
    </Card>
  );
}
