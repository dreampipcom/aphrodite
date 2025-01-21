export const MetaFields = [
	  {
    	name: 'metaTitle',
      type: 'text'
    },
    {
    	name: 'metaDescription',
      type: 'text'
    },
    {
    	name: 'metaImage',
      type: 'text'
    },
]

export const ContentFields = [
	  {
    	name: 'title',
      type: 'text'
    },
    {
    	name: 'summary',
      type: 'text'
    },
    {
    	name: 'videoWebp',
      type: 'text'
    },
    {
    	name: 'videoMp4',
      type: 'text'
    },
    {
    	name: 'gif',
      type: 'text'
    },
    {
    	name: 'image',
      type: 'text'
    },
    {
    	name: 'body',
      type: 'relationship',
      relationTo: ['content-block'],
    },
]