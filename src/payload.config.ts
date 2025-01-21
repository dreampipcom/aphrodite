import path from 'path'
import { fileURLToPath } from 'url'

import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import Users from './collections/Users'

import Pages from './collections/Pages'
import Posts from './collections/Posts'
import Medias from './collections/Medias'
import Globals from './collections/Globals'

import Episodes from './collections/sound/Episodes'
import Shows from './collections/sound/Shows'
import Stations from './collections/sound/Stations'
import Tracks from './collections/sound/Tracks'
import Albums from './collections/sound/Albums'
import Playlists from './collections/sound/Playlists'
import AudioSources from './collections/sound/AudioSources'

import BePublic from './collections/BePublic'

import Calendars from './collections/agenda/Calendars'
import Agendas from './collections/agenda/Agendas'

import ContentBlockTypes from './collections/blocks/ContentBlockTypes'
import ContentBlocks from './collections/blocks/ContentBlocks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  secret: process.env.PAYLOAD_SECRET || '',
  editor: lexicalEditor({}),
  collections: [Users, Medias, Pages, Posts, Globals, BePublic, ContentBlockTypes, ContentBlocks, Calendars, Agendas, AudioSources, Tracks, Albums, Playlists, Episodes, Shows, Stations],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloudPlugin()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  localization: {
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
  },
  routes: {
    admin: '/cms/admin',
    api: '/cms/api',
    graphQL: '/cms/graphql'
  }
})
