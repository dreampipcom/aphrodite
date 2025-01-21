import { getPayload } from "payload"
import config from "@payload-config"

(async () => {
	// init
	// const config = await importConfig("./src/payload.config.ts")
	const payload = await getPayload({ config })

	const users = await payload.find({
		collection: 'user',
	})

	console.log({users})
})()