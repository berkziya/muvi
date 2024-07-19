import { json, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ context }) => {
  const { env } = context.cloudflare;
  const response = await fetch('https://api.themoviedb.org/3/tv/popular', {
    headers: {
      Authorization: `Bearer ${env.TMDB_Token}`,
    },
  });
  const movies = await response.json();
  return json(movies);
};

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix on Cloudflare Workers!',
    },
  ];
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div className='font-sans p-4'>
      {
        // @ts-expect-error data is not typed
        data.results.map((movie) => (
          <div key={movie.id} className='flex items-center space-x-4'>
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={movie.name}
              className='w-12 h-12 rounded-lg'
            />
            <div>
              <h2 className='text-lg font-semibold'>{movie.name}</h2>
              <p className='text-sm'>{movie.overview}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
