import { utcToZonedTime, format } from 'date-fns-tz'

import { DATETIME_FORMAT_TZ } from '../constants/datetime'

export const formatISODateToTZString = (dateIsoString: string, timezone: string, datetimeFormat?: string) => {
  if (!dateIsoString || !timezone) {
    return ''
  }

  return format(utcToZonedTime(dateIsoString, timezone), datetimeFormat || DATETIME_FORMAT_TZ, { timeZone: timezone })
}

export const formatDateToString = (date: Date, datetimeFormat?: string) => {
  if (!date) {
    return ''
  }

  return format(date, datetimeFormat || DATETIME_FORMAT_TZ)
} 