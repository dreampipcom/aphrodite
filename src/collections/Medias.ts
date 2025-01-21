import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Medias: CollectionConfig = {
  slug: 'media',
  upload: true,
  auth: true,
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    {
    	name: 'contentfulId',
    	type: 'text',
    },
  ],
}

export default Medias
