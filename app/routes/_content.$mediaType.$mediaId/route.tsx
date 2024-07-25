import { LoaderFunctionArgs, json } from '@remix-run/cloudflare';
import { useLoaderData, useParams } from '@remix-run/react';
import { MainDetails } from './MainDetails';
import Details from './Details';
import { Genres } from './Genres';
import { Credits } from './Credits';
import { Recommendations } from './Recommendations';
import { useState } from 'react';

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  const mediaType = params.mediaType;
  if (mediaType !== 'movie' && mediaType !== 'series') {
    return json({ error: 'Invalid media type' }, { status: 400 });
  }
  const mediaId = params.mediaId;
  const headers = {
    Authorization: `Bearer ${env.TMDB_Token}`,
    accept: 'application/json',
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      mediaType == 'series' ? 'tv' : 'movie'
    }/${mediaId}?append_to_response=recommendations,credits`,
    {
      headers,
    }
  ).then((res) => {
    return res.json();
  });
  return json(response);
};

export default function MediaPage() {
  const response: any = useLoaderData<typeof loader>();
  const mediaType = useParams().mediaType;
  const [selectedSection, setSelectedSection] = useState('details');

  const renderSection = () => {
    switch (selectedSection) {
      case 'details':
        return <Details {...response} />;
      case 'genres':
        return <Genres {...response} />;
      case 'credits':
        return <Credits {...response} />;
      case 'recommendations':
        return <Recommendations mediaType={mediaType} {...response} />;
      default:
        return null;
    }
  };

  function sectionButton(text: string, section: string) {
    return (
      <button
        onClick={() => setSelectedSection(section)}
        className='bg-background-800 p-2 px-4 rounded-md'
      >
        {text}
      </button>
    );
  }

  return (
    <div className='flex flex-col'>
      <div>{MainDetails(response)}</div>
      <div className='flex flex-row my-10 mx-auto space-x-5'>
        {sectionButton('Details', 'details')}
        {sectionButton('Genres', 'genres')}
        {sectionButton('Credits', 'credits')}
        {sectionButton('Recommendations', 'recommendations')}
      </div>
      <div>{renderSection()}</div>
    </div>
  );
}
