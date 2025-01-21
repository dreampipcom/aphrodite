import { CollectionConfig } from 'payload/types'
import { TimeSpaceFields } from './agenda/constants'
import { MetaFields, ContentFields } from './constants'

const Posts: CollectionConfig = {
  slug: 'post',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...TimeSpaceFields,
  ],
}

export default Posts
