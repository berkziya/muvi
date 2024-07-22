import { json, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { MovieBox } from '~/src/components/MovieBox';
import { SeriesBox } from '~/src/components/SeriesBox';

export const loader: LoaderFunction = async ({ context }) => {
  const { env } = context.cloudflare;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const [moviesResponse, seriesResponse] = await Promise.all([
    fetch('https://api.themoviedb.org/3/movie/popular', { headers }),
    fetch('https://api.themoviedb.org/3/tv/popular', { headers }),
  ]);
  const movies = await moviesResponse.json();
  const series = await seriesResponse.json();
  return json({ movies, series });
};

export const meta: MetaFunction = () => {
  return [{ title: 'Muvi' }];
};

export default function Index() {
  const data: any = useLoaderData();

  return (
    <div className='flex flex-row'>
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-semibold'>Popular Movies</h1>
        {data.movies.results.map((movie: any) => (
          <MovieBox key={movie.id} {...movie} />
        ))}
      </div>
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-semibold'>Popular Series</h1>
        {data.series.results.map((movie: any) => (
          <SeriesBox key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
