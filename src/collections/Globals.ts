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
    	name: 'logoDark',
    	type: 'text'
    },
    {
    	name: 'logoLight',
    	type: 'text'
    },
    {
    	name: 'logoAlt',
    	type: 'text'
    },
    {
    	name: 'logoSly',
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
