export const TimeFields = [
    {
      name: 'calendars',
      type: 'relationship',
      hasMany: true,
      relationTo: ['calendar']
    },
    {
      name: 'localTimezone',
      type: 'text'
    },
]

export const SpaceFields = [
    {
      name: 'spaces',
      type: 'relationship',
      hasMany: true,
      relationTo: ['space']
    },
]

export const TimeSpaceFields = [
 		...TimeFields,
 		...SpaceFields,
 ]