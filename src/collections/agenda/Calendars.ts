import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'

const Calendars: CollectionConfig = {
  slug: 'calendar',
  auth: true,
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    {
      name: 'nearCalendars',
      type: 'relationship',
      relationTo: ['calendar']
    },
    {
      name: 'calendarUrl',
      type: 'text'
    },
    {
      name: 'calendarType',
      type: 'text'
    },
  ],
}

export default Calendars
