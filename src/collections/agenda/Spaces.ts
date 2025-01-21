import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'
import { TimeFields } from './constants'

const Spaces: CollectionConfig = {
  slug: 'space',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...TimeFields,
    {
      name: 'city',
      type: 'text',
      localized: true,
    },
    {
      name: 'country',
      type: 'text',
      localized: true,
    },
    {
      name: 'position',
      type: 'point',
    },
    {
      name: 'hasLiveVideo',
      type: 'boolean'
    },
        {
      name: 'hasLiveAudio',
      type: 'boolean'
    },
  ],
}

export default Spaces
