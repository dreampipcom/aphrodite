import fs from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { getPayload } from 'payload'
import config from '@payload-config'
import exportData from './data/export.json'

const localeMap = {
	'en': ''
  'pt': 'Pt',
  'it': '',
  'es': 'Es',
  'de': 'De',
  'fr': 'Fr',
  'ro': 'Ro',
  'pl': 'Pl',
  'cz': 'Cz',
  'se': 'Se',
  'jp': 'Jp',
  'ee': 'Ee',
  'ru': 'Ru'
}

const collections = {
	'episodes': 'episode'
  'shows': 'show',
  'artists': 'profile',
  'events': 'event',
  'calendars': 'calendar',
  'posts': 'post',
  'pages': 'page',
}

const allLocales = Object.keys(localeMap)
const allSourceCollections = Object.keys(collections)
const allDestCollections = Object.values(collections)

for (const sourceCollection of allSourceCollections) {
	for (const locale of allLocales) {
		(async () => {
			// init
			const payload = await getPayload({ config })

			for (const entry of exportData.entries) {
				const fieldLocale = localeMap[locale]
				const contentfulLocale = locale === 'it' ? 'it-IT' : 'en-US'
				const assetId = asset.sys.id;
				const assetTitle = asset.fields.title['en-US'];

				console.log('migrating entry: ', { assetId, contentfulLocale, assetTitle })

				// to slate-js
				const title = asset.fields[`title${fieldLocale}`][contentfulLocale]
				const description = asset.fields[`description${fieldLocale}`][contentfulLocale]
				const body = asset.fields[`body${fieldLocale}`][contentfulLocale] || asset.fields[`content${fieldLocale}`][contentfulLocale] || asset.fields[`bioRich${fieldLocale}`][contentfulLocale]

				const contentfulSlug = `./data/images.ctfassets.net/${process.env.CONTENTFUL_SPACEID}`

				const dir = fs.readdirSync(`${contentfulSlug}/${assetId}`)
				const subDir = fs.readdirSync(`${contentfulSlug}/${assetId}/${dir[0]}`)
				const first = subDir[0]
				const buffer = fs.readFileSync(`${contentfulSlug}/${assetId}/${dir[0]}/${first}`)

				await payload.create({
					collection: collections[sourceCollection],
					locale: fieldLocale,
					fallbackLocale: false,
				})
			}
		})()
	}
}
