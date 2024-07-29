export function MainDetails(response: any) {
  return (
    <div className='flex flex-row items-start mt-2 mb-6'>
      <div className='h-48 md:h-60 lg:h-72 aspect-[2/3]'>
        <img
          src={`https://image.tmdb.org/t/p/w500${response.poster_path}`}
          alt={response.title ?? response.name}
        />
      </div>
      <div className='p-2'>
        <h1 className='text-l font-semibold text-accent-300'>
          {response.title ?? response.name}
        </h1>
        <p className='text-md line-clamp-6 hover:line-clamp-none'>
          {response.overview}
        </p>
      </div>
    </div>
  );
}
