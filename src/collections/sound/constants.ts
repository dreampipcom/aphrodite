export const SoundFields = [
 	{
  	name: 'audioSource',
  	type: 'relationship',
    relationTo: ['audio-source'],
    hasMany: true
  },
	{
  	name: 'tracks',
  	type: 'relationship',
    relationTo: ['track'],
    hasMany: true
  },
  {
  	name: 'albums',
  	type: 'relationship',
    relationTo: ['album'],
    hasMany: true
  },
  {
  	name: 'playlists',
  	type: 'relationship',
    relationTo: ['playlist'],
    hasMany: true
  },
  {
  	name: 'episodes',
  	type: 'relationship',
    relationTo: ['episode'],
    hasMany: true
  },
  {
  	name: 'shows',
  	type: 'relationship',
    relationTo: ['show'],
    hasMany: true
  },
  {
  	name: 'stations',
  	type: 'relationship',
    relationTo: ['station'],
    hasMany: true
  },
]
