import { CollectionConfig } from 'payload/types'

const ContentBlocks: CollectionConfig = {
  slug: 'content-block',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'content',
      type: 'json'
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: ['cb-type'],
    },
  ],
}

export default ContentBlocks
