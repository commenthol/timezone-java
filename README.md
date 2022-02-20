[![badge npm](https://img.shields.io/npm/v/timezone-java) ![badge downloads](https://img.shields.io/npm/dm/timezone-java)](https://www.npmjs.com/package/timezone-java)

# timezone-java

> Converter between [java.util.TimeZone][] strings and [moment-timezone][] and vice versa

## API

### `toTimezone(timezone, [customerTzMap])`

convert java.util.TimeZone to moment-timezone

### Parameters

| parameter         | type   | description           |
| ----------------- | ------ | --------------------- |
| `timezone`        | string | java.util.TimeZone id |
| `[customerTzMap]` | object | custom timezone map   |

### Example

```js
const {toTimezone} = require('timezone-java')
toTimezone('AET') // > 'Australia/Sydney'

// with custom map
const javaToMomentMap = { 'Etc/GMT+6': 'Asia/Tomsk' }
toTimezone('Etc/GMT+6', javaTzMap) // > 'Asia/Tomsk'
```

### `toJava(timezone, [customerTzMap])`

convert moment-timezone to java.util.TimeZone id

### Parameters

| parameter         | type   | description         |
| ----------------- | ------ | ------------------- |
| `timezone`        | string | moment-timezone     |
| `[customerTzMap]` | object | custom timezone map |

### Example

```js
const {toJava} = require('timezone-java')
toJava('Asia/Tomsk') // > 'Etc/GMT+7'

// with custom map
const momentToJavaMap = { 'Asia/Tomsk': 'Etc/GMT+6' }
toJava('Asia/Tomsk', momentToJavaMap) // > 'Etc/GMT+6'
```

## Installation

```sh
$ npm install timezone-java
```

## Tests

```sh
$ npm test
```

## LICENSE

Unlicense <https://unlicense.org>

## References

- [java.util.TimeZone][]
- [moment-timezone][]

[java.util.TimeZone]: https://docs.oracle.com/javase/8/docs/api/java/util/TimeZone.html
[moment-timezone]: https://momentjs.com/timezone/
