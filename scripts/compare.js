/* eslint no-console:0 */

const {javaTimezoneNames, momentZoneNames} = require('../test/utils')

function compare (java, moment) {
  const o = {j: {}, m: {}, missing: {}}
  moment.forEach((name) => {
    o.m[name] = true
  })
  java.forEach((name) => {
    o.j[name] = true
    if (!o.m[name]) o.missing[name] = 'java'
  })
  moment.forEach((name) => {
    if (!o.j[name]) o.missing[name] = 'tz'
  })
  console.log(o.missing)
}

compare(javaTimezoneNames(), momentZoneNames())
