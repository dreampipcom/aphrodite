import { CollectionConfig } from 'payload/types'
import { SoundFields } from './constants'
import { MetaFields, ContentFields } from '../constants'
import { TimeSpaceFields } from '../agenda/constants'

const Stations: CollectionConfig = {
  slug: 'station',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...SoundFields,
    ...TimeSpaceFields,
    {
    	name: 'friendStations',
      type: 'relationship',
      relationTo: ['station'],
    },
  ],
}

export default Stations
