import { CollectionConfig } from 'payload/types'

const ContentBlockTypes: CollectionConfig = {
  slug: 'cb-type',
  auth: true,
  admin: {
    useAsTitle: 'name',
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
