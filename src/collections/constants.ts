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
      type: 'relationship',
      relationTo: ['media'],
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
      type: 'relationship',
      relationTo: ['media'],
    },
    {
    	name: 'videoMp4',
      type: 'relationship',
      relationTo: ['media'],
    },
    {
    	name: 'gif',
      type: 'relationship',
      relationTo: ['media'],
    },
    {
    	name: 'image',
      type: 'relationship',
      relationTo: ['media'],
    },
    {
    	name: 'body',
      type: 'relationship',
      relationTo: ['content-block'],
      hasMany: true,
    },
]