export const Credits = (response: any) => {
  const cast = response.credits.cast;
  return (
    <div className='p-3'>
      <h2 className='text-xl font-semibold text-accent-300 my-5'>Credits</h2>
      <div className='flex flex-row overflow-x-scroll md:grid md:grid-cols-4 lg:grid-cols-6 gap-5'>
        {cast.map((actor: any) => (
          <div key={actor.id} className=''>
            <div
            className='h-36 aspect-[2/3] min-w-max'
            >
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <div className='h-36 aspect-[2/3] bg-accent-400 min-w-max'></div>
            )}
            </div>
            <h2 className='text-accent-300'>{actor.name}</h2>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
