import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'
import { TimeSpaceFields } from './constants'

const Events: CollectionConfig = {
  slug: 'event',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...TimeSpaceFields,
    {
      name: 'start',
      type: 'date'
    },
    {
      name: 'end',
      type: 'date'
    },
    {
      name: 'offers',
      type: 'relationship',
      hasMany: true,
      relationTo: ['offer']
    },
    {
      name: 'featuredEpisodes',
      type: 'relationship',
      hasMany: true,
      relationTo: ['episode']
    },
    {
      name: 'otherEpisodes',
      type: 'relationship',
      hasMany: true,
      relationTo: ['episode']
    },
    {
      name: 'artists',
      type: 'relationship',
      hasMany: true,
      relationTo: ['profile']
    },
    {
      name: 'photos',
      type: 'relationship',
      hasMany: true,
      relationTo: ['media']
    },
    {
      name: 'pinnedPhotos',
      type: 'relationship',
      hasMany: true,
      relationTo: ['media']
    },
  ],
}

export default Events
