import { SeriesBox } from '~/src/components/SeriesBox';

export async function usePopularSeries(context: any): Promise<any> {
  const { env } = context.cloudflare;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const response = await fetch('https://api.themoviedb.org/3/tv/popular', {
    headers,
  });
  return await response.json();
}

export default function PopularSeries(series: any) {
  return (
    <div className='p-4 flex flex-col'>
      {series.results.map((series: any) => (
        <SeriesBox key={series.id} {...series} />
      ))}
    </div>
  );
}
