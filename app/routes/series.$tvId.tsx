import { json, LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { ImageWithFallback } from '~/src/components/ImageWithFallback';

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

export default function SeriesPage() {
  const data: any = useLoaderData();
  return (
    <div className='container mx-auto p-4'>
      <header className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-4'>{data.name}</h1>
        <p className='text-lg'>{data.tagline}</p>
      </header>
      <div className='flex flex-col md:flex-row gap-4 mb-8'>
        <div className='min-w-fit md:min-w-0 md:max-w-60 md:mb-2'>
          <ImageWithFallback
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.name}
          />
          {/* <ImageWithFallback
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.name}
          /> */}
        </div>
        <div>
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>Overview</h2>
            <p>{data.overview}</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>Details</h2>
            <ul>
              <li>
                <strong>First Air Date:</strong> {data.first_air_date}
              </li>
              <li>
                <strong>Last Air Date:</strong> {data.last_air_date}
              </li>
              <li>
                <strong>Genres:</strong>{' '}
                {data.genres.map((genre: any) => genre.name).join(', ')}
              </li>
              <li>
                <strong>Languages:</strong> {data.languages.join(', ')}
              </li>
              <li>
                <strong>Status:</strong> {data.status}
              </li>
              <li>
                <strong>Vote Average:</strong> {data.vote_average}
              </li>
              <li>
                <strong>Number of Seasons:</strong> {data.number_of_seasons}
              </li>
              <li>
                <strong>Number of Episodes:</strong> {data.number_of_episodes}
              </li>
            </ul>
          </section>
        </div>
      </div>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>Seasons</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {data.seasons.map((season: any) => (
            <div key={season.id} className='p-4 border rounded-lg shadow'>
              <ImageWithFallback
                src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                alt={season.name}
                className='mb-2'
              />
              <h3 className='text-xl font-bold'>{season.name}</h3>
              <p>{season.air_date ?? '?'}</p>
              <p>
                <strong>Episodes:</strong> {season.episode_count}
              </p>
              {/* <p>{season.overview}</p> */}
            </div>
          ))}
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>Networks</h2>
        <div className='flex flex-wrap gap-4'>
          {data.networks.map((network: any) => (
            <div key={network.id} className='flex flex-col items-center'>
              <ImageWithFallback
                src={`https://image.tmdb.org/t/p/w500${network.logo_path}`}
                alt={network.name}
                className='mb-2'
              />
              <span>{network.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>Production Companies</h2>
        <div className='flex flex-wrap gap-4'>
          {data.production_companies.map((company: any) => (
            <div key={company.id} className='flex flex-col items-center'>
              {company.logo_path ? (
                <ImageWithFallback
                  src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                  alt={company.name}
                  className='mb-2'
                />
              ) : (
                <div className='mb-2 h-16 w-16 bg-gray-200 flex items-center justify-center text-gray-500'>
                  No Image
                </div>
              )}
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
