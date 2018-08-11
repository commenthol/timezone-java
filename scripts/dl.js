/* eslint no-console: 0 */

const fs = require('fs')
const https = require('https')
const {parse} = require('url')

const config = {
  'https://raw.githubusercontent.com/moment/moment-timezone/develop/data/unpacked/latest.json':
  `${__dirname}/../test/latest.json`
}

const download = (url, filename) => {
  console.log('downloading %s from %s', filename, url)
  const opts = parse(url)
  opts.method = 'GET'
  https.request(opts, res => {
    let body = ''
    // res.pipe(fs.createWriteStream(filename))
    res.on('data', chunk => body += chunk)
    res.on('end', () => {
      const latest = JSON.parse(body.toString())
      const data = latest.zones.map(zone => zone.name)
      fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8')
    })
  }).end()
}

Object.keys(config).forEach(url => {
  const filename = config[url]
  download(url, filename)
})
