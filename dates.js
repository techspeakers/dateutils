/***
  Generates the UTC date string consumable by the Date() constructor from a
  compact UTC string (that is missing some of the punctuation). These compact
  date strings are frequently found in ICS files originating from Google Calendar.

  It returns a valid JavaScript Date object.
  `20180415T072349Z` -> `2018-04-15T07:23:49Z` -> [object Date]
*/
function fromCompactUTC(d) {
  return new Date(
    d.replace(
      /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/,
      (_,y,m,d,h,i,s) => `${[y,m,d].join('-')}T${[h,i,s].join(':')}Z`
    )
  )
}

function startOfDayUTC(date) {
  const d = date && date instanceof Date ? date : new Date()
    d.setUTCHours(0)
    d.setUTCMinutes(0)
    d.setUTCSeconds(0)
    d.setUTCMilliseconds(0)

  return d
}


module.exports = {
  fromCompactUTC,
  startOfDayUTC,
}
