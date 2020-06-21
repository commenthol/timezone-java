/* global describe, it */

const assert = require('assert')
const {javaTimezoneNames, momentZoneNames} = require('./utils')
const {toTimezone, toJava} = require('../src')
const moment = require('moment-timezone')

const javaTzs = javaTimezoneNames()
const momentTzs = momentZoneNames()

describe('#java-timezones', function () {
  describe('shall convert moment-timezone to java timezone strings', function () {
    momentTzs.forEach((tz) => {
      it(String(tz), function () {
        const tzid = toJava(tz)
        assert.ok(javaTzs.indexOf(tzid) !== -1, `${tzid} is not available in java`)
      })
    })
  })

  describe('shall convert java timezone strings to moment-timezone', function () {
    javaTzs.forEach((tz) => {
      it(tz, function () {
        const tzid = toTimezone(tz)
        moment.tz(tzid).format() // test if moment does to print warning
        assert.ok(momentTzs.indexOf(tzid) !== -1, `${tzid} is not available in moment-tz`)
      })
    })
  })
})
