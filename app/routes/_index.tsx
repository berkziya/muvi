import { json, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { MovieBox } from '~/components/MovieBox';

export const loader: LoaderFunction = async ({ context }) => {
  const { env } = context.cloudflare;
  const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      Authorization: `Bearer ${env.TMDB_Token}`,
    },
  });
  const movies = await response.json();
  return json(movies);
};

export const meta: MetaFunction = () => {
  return [{ title: 'Muvi' }];
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div className='font-sans p-4'>
      {
        // @ts-expect-error data is not typed
        data.results.map((movie) => (
          <MovieBox {...movie} />
        ))
      }
    </div>
  );
}
