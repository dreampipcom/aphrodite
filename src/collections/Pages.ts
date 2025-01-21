import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Pages: CollectionConfig = {
  slug: 'page',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
  ],
}

export default Pages
