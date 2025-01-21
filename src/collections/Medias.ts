import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Medias: CollectionConfig = {
  slug: 'media',
  upload: {
    adminThumbnail: 'small',
    imageSizes: [
      {
        name: 'small',
        fit: 'cover',
        height: 300,
        width: 900,
      },
      {
        name: 'large',
        fit: 'cover',
        height: 600,
        width: 1800,
      }
    ],
  },
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
