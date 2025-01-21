import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'

import Pages from './collections/Pages'
import Posts from './collections/Posts'

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
// import Globals from './collections/Globals'


export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Pages, Posts, BePublic, ContentBlockTypes, ContentBlocks, Calendars, Agendas, AudioSources, Tracks, Albums, Playlists, Episodes, Shows, Stations],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  localization: {
    locales: ['en', 'es', 'de'], // required
    defaultLocale: 'en', // required
  },
})
