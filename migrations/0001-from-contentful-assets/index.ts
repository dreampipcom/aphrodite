import fs from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { getPayload } from 'payload'
import config from '@payload-config'
import exportData from './data/export.json'

(async () => {
	// init
	const payload = await getPayload({ config })

	for (const asset of exportData.assets) {
		const assetId = asset.sys.id;
		const assetTitle = asset.fields.title['en-US'];
		console.log('migrating asset: ', assetId)

		const contentfulSlug = `./data/images.ctfassets.net/${process.env.CONTENTFUL_SPACEID}`

		const dir = fs.readdirSync(`${contentfulSlug}/${assetId}`)
		const subDir = fs.readdirSync(`${contentfulSlug}/${assetId}/${dir[0]}`)
		const first = subDir[0]
		const buffer = fs.readFileSync(`${contentfulSlug}/${assetId}/${dir[0]}/${first}`)

		await payload.create({
			collection: 'media',
			file: {
				data: buffer,
				name: first,
				size: buffer.length,
			},
			data: {
				contentfulId: assetId,
				alt: assetTitle || first
			}
		})
	}
})()