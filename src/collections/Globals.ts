import { CollectionConfig } from 'payload/types'
import { MetaFields, ContentFields } from './constants'

const Globals: CollectionConfig = {
  slug: 'global',
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
    	type: 'relationship',
    	relationTo: ['media']
    },
    {
    	name: 'logoDark',
    	type: 'relationship',
    	relationTo: ['media']
    },
    {
    	name: 'logoLight',
    	type: 'relationship',
    	relationTo: ['media']
    },
    {
    	name: 'logoAlt',
    	type: 'relationship',
    	relationTo: ['media']
    },
    {
    	name: 'logoSly',
    	type: 'relationship',
    	relationTo: ['media']
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
