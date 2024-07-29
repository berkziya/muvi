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
  const promise = fetch(`https://api.themoviedb.org/3/${type}/popular`, {
    headers,
  }).then((res) => res.json());
  return promise;
}

export default function PopularMediaList({
  mediaType,
  data,
}: {
  mediaType: 'movie' | 'tv';
  data: any;
}) {
  if (!data) return null;
  return (
    <div className=' flex flex-col'>
      {data.results.map((datum: any) => (
        <MediaBox key={datum.id} {...datum} />
      ))}
    </div>
  );
}
