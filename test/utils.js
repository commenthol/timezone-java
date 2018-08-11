const fs = require('fs')
const {resolve} = require('path')

function javaTimezoneNames () {
  const filename = resolve(__dirname, 'javatimezones.txt')
  const txt = fs.readFileSync(filename, 'utf8')
  const data = txt.split(/[\n\r]/).map((line) => line.trim())
    .filter((line) => line)
  return data
}

function momentZoneNames () {
  // const zones = require('moment-timezone').tz.names()
  const zones = require('./latest.json')
  return zones
}

module.exports = {
  javaTimezoneNames,
  momentZoneNames
}
