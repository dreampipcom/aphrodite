import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'

const Events: CollectionConfig = {
  slug: 'event',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    {
      name: 'calendars',
      type: 'relationship',
      hasMany: true,
      relationTo: ['calendar']
    },
    {
      name: 'start',
      type: 'date'
    },
    {
      name: 'end',
      type: 'date'
    },
    {
      name: 'localTimezone',
      type: 'text'
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
    {
      name: 'ungatedTicket',
      type: 'text'
    },
    {
      name: 'listCta',
      type: 'text'
    },
    {
      name: 'listUrl',
      type: 'text'
    },
    {
      name: 'ticketCta',
      type: 'text'
    },
    {
      name: 'ticketUrl',
      type: 'text'
    },
    {
      name: 'structuredData',
      type: 'json'
    },
    {
      name: 'city',
      type: 'text'
    },
    {
      name: 'country',
      type: 'text'
    },
    {
      name: 'hasLiveVideo',
      type: 'boolean'
    },
  ],
}

export default Events
