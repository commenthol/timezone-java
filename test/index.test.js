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

  describe('custom overrides', function () {
    const jsToJavaMap = { 'Asia/Tomsk': 'Etc/GMT+6' }

    it('shall convert js timezone to java', () => {
      assert.strictEqual(
        toJava('Asia/Tomsk', jsToJavaMap),
        'Etc/GMT+6'
      )
      assert.strictEqual(
        toJava('ROC', jsToJavaMap),
        'Asia/Taipei'
      )
    })

    it('shall convert java timezone to js', () => {
      const javaToJsMap = Object.entries(jsToJavaMap)
        .reduce((o, [k, v]) => { 
          o[v] = k 
          return o
        }, {})

      assert.strictEqual(
        toTimezone('Etc/GMT+6', javaToJsMap),
        'Asia/Tomsk'
      )
      assert.strictEqual(
        toTimezone('ACT', javaToJsMap),
        'Australia/Darwin'
      )
    })
  })
})
