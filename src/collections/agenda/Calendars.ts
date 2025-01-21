import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'

const Calendars: CollectionConfig = {
  slug: 'calendar',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    {
      name: 'nearCalendars',
      type: 'relationship',
      hasMany: true,
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
    {
      name: 'city',
      type: 'text'
    },
    {
      name: 'where',
      type: 'point'
    },
    {
      name: 'zoom',
      type: 'number'
    },
  ],
}

export default Calendars
