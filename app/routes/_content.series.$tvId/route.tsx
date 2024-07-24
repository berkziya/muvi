import { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { Await, defer, useLoaderData } from '@remix-run/react';

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  const tvId = params.tvId;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const responsePromise = fetch(`https://api.themoviedb.org/3/tv/${tvId}`, {
    headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
  return defer({
    response: responsePromise,
  });
};

export default function SeriesPage() {
  const { response } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className='p4'>
        <Await resolve={response}>
          {(resolvedResponse) => (
            <pre>{JSON.stringify(resolvedResponse, null, 2)}</pre>
          )}
        </Await>
      </div>
    </div>
  );
}
