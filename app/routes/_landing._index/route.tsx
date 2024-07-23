import { LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import PopularMovies, { getPopularMovies } from './popular.movies';
import PopularSeries, { getPopularSeries } from './popular.series';
import { useLoaderData } from '@remix-run/react';

const CACHE_DURATION = 60 * 60 * 1000; // 60 minutes
const cache = {  // why const? idk
  movies: { data: null, timestamp: 0 },
  series: { data: null, timestamp: 0 },
};

export const loader: LoaderFunction = async ({ context }) => {
  const now = Date.now();

  if (!cache.movies.data || now - cache.movies.timestamp > CACHE_DURATION) {
    cache.movies.data = { results: [], ...(await getPopularMovies(context)) };
    cache.movies.timestamp = Date.now();
  }

  if (!cache.series.data || now - cache.series.timestamp > CACHE_DURATION) {
    cache.series.data = { results: [], ...(await getPopularSeries(context)) };
    cache.series.timestamp = Date.now();
  }

  return { movies: cache.movies.data, series: cache.series.data };
};

export const meta: MetaFunction = () => {
  return [{ title: 'Muvi' }];
};

export default function Index() {
  const data: any = useLoaderData();
  return (
    <div className='flex flex-row'>
      <PopularMovies {...data.movies} />
      <PopularSeries {...data.series} />
    </div>
  );
}
