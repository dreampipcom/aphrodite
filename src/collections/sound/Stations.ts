import { CollectionConfig } from 'payload/types'
import { SoundFields } from './constants'
import { MetaFields, ContentFields } from '../constants'

const Stations: CollectionConfig = {
  slug: 'station',
  auth: true,
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...SoundFields,
    {
    	name: 'friendStations',
      type: 'relationship',
      relationTo: ['station'],
    },
  ],
}

export default Stations
