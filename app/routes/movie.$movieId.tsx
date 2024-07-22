import { json, LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ params, context }) => {
  const { env } = context.cloudflare;
  const movieId = params.movieId;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${env.TMDB_Token}`,
        accept: 'application/json',
      },
    }
  );
  const movies = await response.json();
  return json(movies);
};

export default function MoviePage() {
  const movie: any = useLoaderData();
  return (
    <div>
      <div className='p4'>
        <pre>{JSON.stringify(movie, null, 2)}</pre>
      </div>
    </div>
  );
}
