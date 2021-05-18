import { utcToZonedTime, format } from 'date-fns-tz'

import { DATETIME_FORMAT_TZ } from '../constants/datetime'

export const formatISODateToTZString = (dateIsoString: string, timezone: string, datetimeFormat?: string) => {
  return format(utcToZonedTime(dateIsoString, timezone), datetimeFormat || DATETIME_FORMAT_TZ, { timeZone: timezone })
}

export const formatDateToString = (date: Date, datetimeFormat?: string) => {
  return format(date, datetimeFormat || DATETIME_FORMAT_TZ)
} 