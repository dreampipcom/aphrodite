import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Medias: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
		{
    	name: 'alt',
    	type: 'text',
    },
    {
    	name: 'contentfulId',
    	type: 'text',
    },
  ],
}

export default Medias
