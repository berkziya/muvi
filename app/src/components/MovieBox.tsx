import { Link } from '@remix-run/react';
import { ImageWithFallback } from './ImageWithFallback';

// @ts-expect-error movie is not typed
export const MovieBox = (movie) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className='p-4 flex items-start space-x-4 h-sm max-w-md'
    >
      <ImageWithFallback
        src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
        alt={movie.name}
        className='max-h-24 rounded-lg'
      />
      <div className='flex flex-col'>
        <h2 className='text-lg font-semibold overflow-ellipsis line-clamp-1'>
          {movie.title}
        </h2>
        <p className='text-sm overflow-hidden line-clamp-3'>{movie.overview}</p>
      </div>
    </Link>
  );
};
