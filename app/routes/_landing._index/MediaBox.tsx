import { Link } from '@remix-run/react';

export type Media = {
  id: string;
  poster_path: string;
  title?: string; // Movie title
  name?: string; // Series name
  overview: string;
};

export const MediaBox = (media: Media) => {
  return (
    <Link
      to={`/${media.title ? 'movie' : 'series'}/${media.id}`}
      className='p-3 flex items-start space-x-4 hover:bg-opacity-80'
    >
      <img
        src={`https://image.tmdb.org/t/p/w92${media.poster_path}`}
        alt={media.title || media.name}
        className='max-h-24 rounded-lg'
      />
      <div className='flex flex-col'>
        <h2 className='text-lg font-semibold text-accent-200 overflow-ellipsis line-clamp-1'>
          {media.title || media.name}
        </h2>
        <p className='text-sm line-clamp-3'>{media.overview}</p>
      </div>
    </Link>
  );
};
