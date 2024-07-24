import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import PopularMedia, { getPopularMedia } from './PopularMedia';

const CACHE_DURATION = 60 * 60 * 1000; // 60 minutes
const cache = {
  movies: { data: null, timestamp: 0 },
  series: { data: null, timestamp: 0 },
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const now = Date.now();

  if (!cache.movies.data || now - cache.movies.timestamp > CACHE_DURATION) {
    cache.movies.data = await getPopularMedia(context, 'movie');
    cache.movies.timestamp = now;
  }

  if (!cache.series.data || now - cache.series.timestamp > CACHE_DURATION) {
    cache.series.data = await getPopularMedia(context, 'tv');
    cache.series.timestamp = now;
  }

  return json({ movies: cache.movies.data, series: cache.series.data });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Muvi' }];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className='flex flex-row'>
      <PopularMedia mediaType='movie' data={data.movies} />
      <PopularMedia mediaType='tv' data={data.series} />
    </div>
  );
}
