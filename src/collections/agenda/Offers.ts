import { CollectionConfig } from 'payload/types'
import { SoundFields } from '../sound/constants'
import { MetaFields, ContentFields } from '../constants'
import { TimeSpaceFields } from './constants'

const Offers: CollectionConfig = {
  slug: 'offer',
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...ContentFields,
    ...TimeSpaceFields,
     {
      name: 'ungatedTicketUrl',
      type: 'text'
    },
    {
      name: 'guestlistCta',
      type: 'text',
      localized: true,
    },
    {
      name: 'guestlistUrl',
      type: 'text',
    },
    {
      name: 'ticketCta',
      type: 'text',
      localized: true,
    },
    {
      name: 'ticketUrl',
      type: 'text'
    },
    {
      name: 'structuredData',
      type: 'json',
      localized: true,
    },
  ],
}

export default Offers
