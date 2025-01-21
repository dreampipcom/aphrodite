import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Globals: CollectionConfig = {
  slug: 'global',
  auth: true,
  admin: {
    useAsTitle: 'settingsName',
  },
  fields: [
    {
    	name: 'settingsName',
    	type: 'text'
    },
    {
    	name: 'siteName',
    	type: 'text'
    },
    {
    	name: 'siteTitle',
    	type: 'text'
    },
    {
    	name: 'siteDescription',
    	type: 'text'
    },
    {
    	name: 'siteImage',
    	type: 'text'
    },
    {
    	name: 'logo-dark',
    	type: 'text'
    },
    {
    	name: 'logo-light',
    	type: 'text'
    },
    {
    	name: 'logo-alt',
    	type: 'text'
    },
    {
    	name: 'logo-sly',
    	type: 'text'
    },
    {
    	name: 'navData',
    	type: 'json'
    },
    {
    	name: 'footerData',
    	type: 'json'
    },
  ],
}

export default Globals
