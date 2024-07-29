export const Genres = (response: any) => {
  return (
    <div className='p-3'>
      <h2 className='text-xl font-semibold text-accent-300 my-5'>Genres</h2>
      <div className='text-lg'>
        {response.genres.map((genre: any) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
    </div>
  );
};
