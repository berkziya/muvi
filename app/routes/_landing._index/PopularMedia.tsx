import { AppLoadContext } from '@remix-run/cloudflare';
import { MediaBox } from './MediaBox';

export async function getPopularMedia(
  context: AppLoadContext,
  type: 'movie' | 'tv'
): Promise<any> {
  const { env } = context.cloudflare;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const response = await fetch(`https://api.themoviedb.org/3/${type}/popular`, {
    headers,
  });
  return await response.json();
}

export default function PopularMedia({
  mediaType,
  data,
}: {
  mediaType: 'movie' | 'tv';
  data: any;
}) {
  if (!data) return null;
  return (
    <div className='p-4 flex flex-col'>
      {data.results.map((datum: any) => (
        <MediaBox key={datum.id} {...datum} />
      ))}
    </div>
  );
}
