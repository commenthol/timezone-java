/* eslint no-multi-spaces:0 */

/**
 * missing timezones in moment-timezone
 */
const JAVA_2_TZ = {
  // source https://github.com/JodaOrg/joda-time/blob/master/src/main/java/org/joda/time/tz/src/systemv
  'SystemV/AST4': 'Etc/GMT-4',
  'SystemV/AST4ADT': 'Canada/Atlantic',
  'SystemV/CST6': 'Etc/GMT-6',
  'SystemV/CST6CDT': 'America/Chicago',
  'SystemV/EST5': 'Etc/GMT-5',
  'SystemV/EST5EDT': 'America/New_York',
  'SystemV/HST10': 'HST',
  'SystemV/MST7': 'MST',
  'SystemV/MST7MDT': 'MST7MDT',
  'SystemV/PST8': 'Etc/GMT-8',
  'SystemV/PST8PDT': 'PST8PDT',
  'SystemV/YST9': 'Etc/GMT-9',
  'SystemV/YST9YDT': 'America/Anchorage',
  // source https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html
  ACT: 'Australia/Darwin',    // Australia Central Time
  AET: 'Australia/Sydney',    // Australian Eastern Time
  AGT: 'America/Argentina/Buenos_Aires',   // Argentina Time
  ART: 'Africa/Cairo',        // Egypt Standard Time
  AST: 'America/Anchorage',   // Atlantic Standard Time
  BET: 'America/Sao_Paulo',   // Brazil Eastern Time
  BST: 'Asia/Dhaka',          // Bangladesh Standard Time
  CAT: 'Africa/Harare',       // Central Africa Time
  CNT: 'America/St_Johns',    // Canada Newfoundland Time
  CST: 'America/Chicago',     // Central Standard Time
  CTT: 'Asia/Shanghai',       // China Taiwan Time
  EAT: 'Africa/Addis_Ababa',  // Eastern Africa Time
  ECT: 'Europe/Paris',        // European Central Time
  IET: 'America/Indiana/Indianapolis', // Indiana Eastern Standard Time
  IST: 'Asia/Kolkata',        // India Standard Time
  JST: 'Asia/Tokyo',          // Japan Standard Time
  MIT: 'Pacific/Apia',        // Midway Islands Time
  NET: 'Asia/Yerevan',        // Near East Time
  NST: 'Pacific/Auckland',    // New Zealand Standard Time
  PLT: 'Asia/Karachi',        // Pakistan Lahore Time
  PNT: 'America/Phoenix',     // Phoenix Standard Time
  PRT: 'America/Puerto_Rico', // Puerto Rico and US Virgin Islands Time
  PST: 'America/Los_Angeles', // Pacific Standard Time
  SST: 'Pacific/Guadalcanal', // Samoa Standard Time
  VST: 'Asia/Ho_Chi_Minh'     // Vietnam Standard Time
}

/**
 * missing timezones in java
 */
const TZ_2_JAVA = {
  // source https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  'America/Fort_Nelson': 'Etc/GMT-7',
  'America/Punta_Arenas': 'Etc/GMT-3',
  'Asia/Atyrau': 'Etc/GMT+5',
  'Asia/Barnaul': 'Etc/GMT+7',
  'Asia/Famagusta': 'Etc/GMT+3',
  'Asia/Tomsk': 'Etc/GMT+7',
  'Asia/Yangon': 'Asia/Rangoon',
  'Europe/Astrakhan': 'Etc/GMT+4',
  'Europe/Kirov': 'Etc/GMT+3',
  'Europe/Saratov': 'Etc/GMT+4',
  'Europe/Ulyanovsk': 'Etc/GMT+4',
  'GMT+0': 'Etc/GMT',
  'GMT-0': 'Etc/GMT',
  ROC: 'Asia/Taipei'
}

/**
 * convert java.util.TimeZone id to moment-timezone
 * @param {string} timezone - java.util.TimeZone id
 * @example
 * const {toTimezone} = require('timezone-java')
 * toTimezone('AET') // > 'Etc/GMT+11'
 */
function toTimezone (timezone) {
  return JAVA_2_TZ[timezone] || timezone
}

/**
 * convert moment-timezone to java.util.TimeZone id
 * @param {string} timezone - moment-timezone
 * @example
 * const {toJava} = require('timezone-java')
 * toJava('Asia/Tomsk') // > 'Etc/GMT+7'
 */
function toJava (timezone) {
  return TZ_2_JAVA[timezone] || timezone
}

module.exports = {
  toTimezone,
  toJava
}
