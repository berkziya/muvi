export default function Details(response: any) {
  return (
    <div className='p-3'>
      <h2 className='text-xl font-semibold text-accent-300 my-5'>Details</h2>
      <div>
        <p>Release Date: {response.release_date ?? response.first_air_date}</p>
        <p>Rating: {Math.round(response.vote_average * 100) / 100}</p>
        <p>Vote Count: {response.vote_count}</p>
        <p>Popularity: {response.popularity}</p>
        <p>Status: {response.status}</p>
        <br />
        <br />
        {/* <pre className='overflow-x-hidden whitespace-break-spaces max-w-[100%]'>
          {JSON.stringify(response, null, 2)}
        </pre> */}
      </div>
    </div>
  );
}
