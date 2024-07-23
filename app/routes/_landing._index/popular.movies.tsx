import { MovieBox } from '~/routes/_landing._index/MovieBox';

export async function getPopularMovies(context: any): Promise<any> {
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

export default function PopularMovies(movies: any = null) {
  const data = movies;
  if (!data) return;
  return (
    <div className='p-4 flex flex-col'>
      {data.results.map((datum: any) => (
        <MovieBox key={datum.id} {...datum} />
      ))}
    </div>
  );
}
