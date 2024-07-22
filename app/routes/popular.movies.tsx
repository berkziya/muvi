import { MovieBox } from '~/src/components/MovieBox';

export async function usePopularMovies(context: any): Promise<any> {
  const { env } = context.cloudflare;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers,
  });
  return await response.json();
}

export default function PopularMovies(movies: any) {
  return (
    <div className='p-4 flex flex-col'>
      {movies.results.map((movie: any) => (
        <MovieBox key={movie.id} {...movie} />
      ))}
    </div>
  );
}
