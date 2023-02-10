import sanityClient from '@sanity/client';
import type { Conference } from '$lib/types';

import type { PageLoad } from './$types';

const client = sanityClient({
	projectId: 'i4lcyz9a',
	dataset: 'production',
	apiVersion: '2023-01-30',
	useCdn: false
});

type OutputType = { conference: Conference };

export const load: PageLoad<OutputType> = async ({ params }) => {
	const data = await client.fetch(`*[_type == "conference"][${params.slug}]{_id,
    title,
    description,
    location,
    venue,
    startDate,
    endDate,
    'talkCount': count(*[_type == 'talk']),
    'speakerCount': count(*[_type == 'speaker']),
    'days': *[_type == 'day' && references(^._id)] | order(date asc)
    {
      _id,
      title,
      description,
      date,
      'talks': *[_type == 'talk' && references(^._id)] | order(time asc)
      {
          _id,
          title,
          time,
          'speaker': speaker->name,   
      },
      'speakers': *[_type == 'speaker' && _id in *[_type == 'talk' && references(^.^._id)].speaker._ref]
      {
          name,
          title,
          'imageUrl': image.asset->url
      }
  }
  }`);

	return { conference: data as Conference };
};
