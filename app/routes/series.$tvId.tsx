import { json, LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ params, context }) => {
  const { env } = context.cloudflare;
  const tvId = params.tvId;
  const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}`, {
    headers: {
      Authorization: `Bearer ${env.TMDB_Token}`,
      accept: 'application/json',
    },
  });
  const series = await response.json();
  return json(series);
};

export default function MoviePage() {
  const series: any = useLoaderData();
  return (
    <div>
      <div className='p4'>
        <pre>{JSON.stringify(series, null, 2)}</pre>
      </div>
    </div>
  );
}
