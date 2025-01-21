import { CollectionConfig } from 'payload/types'
import { TimeSpaceFields } from './agenda/constants'
import { SoundFields } from './sound/constants'
import { MetaFields, ContentFields } from './constants'

const BePublic: CollectionConfig = {
  slug: 'profile',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
		...ContentFields,
    ...SoundFields,
    ...TimeSpaceFields,
    {
    	name: 'posts',
      type: 'relationship',
      relationTo: ['post'],
    },
  ],
}

export default BePublic
