import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { PopularMediaList, getPopularMedia } from './PopularMediaList';

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const movies = await getPopularMedia(context, 'movie');
  const series = await getPopularMedia(context, 'tv');

  return json({ movies, series });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Muvi' }];
};

export default function Index() {
  const { movies, series } = useLoaderData<typeof loader>();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h1 className='text-2xl font-semibold text-accent-300'>
          Popular Movies
        </h1>
        <PopularMediaList data={movies} />
      </div>
      <div>
        <h1 className='text-2xl font-semibold text-accent-300'>
          Popular Series
        </h1>
        <PopularMediaList data={series} />
      </div>
    </div>
  );
}
