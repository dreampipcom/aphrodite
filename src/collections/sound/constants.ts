export const SoundFields = [
 	{
  	name: 'audioSource',
  	type: 'relationship',
    relationTo: ['audio-source'],
  },
	{
  	name: 'tracks',
  	type: 'relationship',
    relationTo: ['track'],
  },
  {
  	name: 'albums',
  	type: 'relationship',
    relationTo: ['album'],
  },
  {
  	name: 'playlists',
  	type: 'relationship',
    relationTo: ['playlist'],
  },
  {
  	name: 'episodes',
  	type: 'relationship',
    relationTo: ['episode'],
  },
  {
  	name: 'shows',
  	type: 'relationship',
    relationTo: ['show'],
  },
  {
  	name: 'stations',
  	type: 'relationship',
    relationTo: ['station'],
  },
]
