import { CollectionConfig } from 'payload/types'
import { SoundFields } from './constants'
import { MetaFields, ContentFields } from '../constants'
import { TimeSpaceFields } from '../agenda/constants'

const Tracks: CollectionConfig = {
  slug: 'track',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...SoundFields,
    ...TimeSpaceFields,
  ],
}

export default Tracks
