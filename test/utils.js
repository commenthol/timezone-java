const fs = require('fs')
const {resolve} = require('path')
const {zones} = require('moment-timezone/data/unpacked/latest.json')
// const zones = require('moment-timezone').tz.names()

function javaTimezoneNames () {
  const filename = resolve(__dirname, 'javatimezones.txt')
  const txt = fs.readFileSync(filename, 'utf8')
  const data = txt.split(/[\n\r]/).map((line) => line.trim())
    .filter((line) => line)
  return data
}

function momentZoneNames () {
  const data = zones.map((zone) => zone.name)
  return data
}

module.exports = {
  javaTimezoneNames,
  momentZoneNames
}
