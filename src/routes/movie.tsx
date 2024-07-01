import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Movie } from '@/models';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL as string;

interface Params {
  movieId: string;
}

export async function loader({ params }: LoaderFunctionArgs<Params>) {
  return fetch(`${API_URL}/movies/${params.movieId}`);
}

export function MovieDetail() {
  const movie = useLoaderData() as Movie;
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
