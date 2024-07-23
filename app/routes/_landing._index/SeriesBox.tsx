import { Link } from '@remix-run/react';

// @ts-expect-error series is not typed
export const SeriesBox = (series) => {
  return (
    <Link
      to={`/series/${series.id}`}
      className='p-4 flex items-start space-x-4 max-h-32 max-w-md'
    >
      <img
        src={`https://image.tmdb.org/t/p/w92${series.poster_path}`}
        alt={series.name}
        className='max-h-24 rounded-lg'
      />
      <div className='flex flex-col'>
        <h2 className='text-lg font-semibold'>{series.name}</h2>
        <p className='text-sm overflow-hidden line-clamp-3'>
          {series.overview}
        </p>
      </div>
    </Link>
  );
};
