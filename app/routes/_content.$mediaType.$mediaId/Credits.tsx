export const Credits = (response: any) => {
  const cast = response.credits.cast;
  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold text-accent-300 mb-9'>Credits</h2>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
        {cast.map((actor: any) => (
          <div key={actor.id} className='max-w-28 mx-auto'>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <div className='aspect-[2/3] bg-accent-400 min-w-max min-h-max'></div>
            )}
            <h2 className='text-accent-300'>{actor.name}</h2>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
