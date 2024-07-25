export function MainDetails(response: any) {
  return (
    <div className='flex flex-row'>
      <img
        src={`https://image.tmdb.org/t/p/w500${response.poster_path}`}
        alt={response.title ?? response.name}
        className='w-1/4 max-w-52'
      />
      <div className='p-4'>
        <h1 className='text-2xl font-semibold text-accent-300'>
          {response.title ?? response.name}
        </h1>
        <p>{response.overview}</p>
      </div>
    </div>
  );
}
