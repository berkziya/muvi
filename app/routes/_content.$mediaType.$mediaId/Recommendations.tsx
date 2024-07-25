import { Link } from '@remix-run/react';

// return <Recommendations mediaType={mediaType} {...response} />;

export const Recommendations = ({ mediaType, ...response }: any) => {
  const recommendations = response.recommendations.results;
  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold text-accent-300 mb-9'>
        Recommendations
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {recommendations.map((recommendation: any) => (
          <div key={recommendation.id}>
            <Link to={`../${mediaType}/${recommendation.id}`}>
              {recommendation.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${recommendation.backdrop_path}`}
                  alt={recommendation.title ?? recommendation.name}
                />
              ) : (
                <div className='aspect-[500/281] bg-accent-400 min-w-max min-h-max'></div>
              )}
              <p>{recommendation.title ?? recommendation.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
