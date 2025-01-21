import { CollectionConfig } from 'payload/types'

const ContentBlockTypes: CollectionConfig = {
  slug: 'cb-type',
  admin: {
    useAsTitle: 'type',
  },
  fields: [
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'settings',
      type: 'json'
    },
    {
      name: 'blocks',
      type: 'relationship',
      relationTo: ['content-block'],
    },
  ],
}

export default ContentBlockTypes
