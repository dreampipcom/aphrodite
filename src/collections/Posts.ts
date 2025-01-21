import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Posts: CollectionConfig = {
  slug: 'post',
  auth: true,
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
  ],
}

export default Posts
