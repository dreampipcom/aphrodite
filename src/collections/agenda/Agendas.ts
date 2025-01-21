import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'

const Agendas: CollectionConfig = {
  slug: 'agenda',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...SoundFields,
    {
      name: 'posts',
      type: 'relationship',
      relationTo: ['post'],
    },
    {
      name: 'calendars',
      type: 'relationship',
      relationTo: ['calendar'],
    },
  ],
}

export default Agendas
