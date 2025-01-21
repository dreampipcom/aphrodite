import { CollectionConfig } from 'payload/types'
import { SoundFields } from './constants'
import { MetaFields, ContentFields } from '../constants'

const AudioSources: CollectionConfig = {
  slug: 'audio-source',
  auth: true,
  admin: {
    useAsTitle: 'metaTitle',
  },
  fields: [
    ...MetaFields,
    ...SoundFields,
  ],
}

export default AudioSources
