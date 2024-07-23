import { SeriesBox } from '~/routes/_landing._index/SeriesBox';

export async function getPopularSeries(context: any): Promise<any> {
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

export default function PopularSeries(series: any = null) {
  const data = series;
  if (!data) return;
  return (
    <div className='p-4 flex flex-col'>
      {data.results.map((datum: any) => (
        <SeriesBox key={datum.id} {...datum} />
      ))}
    </div>
  );
}
