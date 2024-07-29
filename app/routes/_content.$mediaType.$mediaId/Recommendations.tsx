import { Link } from '@remix-run/react';

// return <Recommendations mediaType={mediaType} {...response} />;

export const Recommendations = ({ mediaType, ...response }: any) => {
  const recommendations = response.recommendations.results;
  return (
    <div className='p-3'>
      <h2 className='text-xl font-semibold text-accent-300 my-5'>
        Recommendations
      </h2>
      <div className='flex flex-row overflow-x-scroll md:grid md:grid-cols-4 gap-5'>
        {recommendations.map((recommendation: any) => (
          <div key={recommendation.id}>
            <Link to={`../${mediaType}/${recommendation.id}`}>
              <div className='aspect-[500/281] min-h-32'>
                {recommendation.backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${recommendation.backdrop_path}`}
                    alt={recommendation.title ?? recommendation.name}
                  />
                ) : (
                  <div className='aspect-[500/281] bg-accent-400 min-w-max min-h-max'></div>
                )}
              </div>
              <p className='p-2 text-accent-300'>
                {recommendation.title ?? recommendation.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
