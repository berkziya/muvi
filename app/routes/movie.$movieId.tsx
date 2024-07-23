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
  const data = await response.json();
  return json(data);
};

export default function MoviePage() {
  const data: any = useLoaderData();
  return (
    <div>
      <div className='p4'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
