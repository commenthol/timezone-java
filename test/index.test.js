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
        const res = toJava(tz)
        assert.ok(javaTzs.indexOf(res) !== -1)
      })
    })
  })

  describe('shall convert java timezone strings to moment-timezone', function () {
    javaTzs.forEach((tz) => {
      it(tz, function () {
        const res = toTimezone(tz)
        moment.tz(res).format() // test if momnet does to print warning
        assert.ok(momentTzs.indexOf(res) !== -1)
      })
    })
  })
})
