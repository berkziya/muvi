import { json, LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  const movieId = params.movieId;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers,
    }
  );
  const data = await response.json();
  return json(data);
};

export default function MoviePage() {
  const data = useLoaderData();
  return (
    <div>
      <div className='p4'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
