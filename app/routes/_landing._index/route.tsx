import { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { Await, defer, useLoaderData } from '@remix-run/react';
import PopularMediaList, { getPopularMedia } from './PopularMediaList';

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const moviesPromise = getPopularMedia(context, 'movie');
  const seriesPromise = getPopularMedia(context, 'tv');

  return defer({ movies: moviesPromise, series: seriesPromise });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Muvi' }];
};

export default function Index() {
  const { movies, series } = useLoaderData<typeof loader>();
  return (
    <div className='flex flex-row'>
      <Await resolve={movies}>
        {(data) => <PopularMediaList mediaType='movie' data={data} />}
      </Await>
      <Await resolve={series}>
        {(data) => <PopularMediaList mediaType='tv' data={data} />}
      </Await>
    </div>
  );
}
