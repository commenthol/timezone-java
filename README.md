# timezone-java

> Converter between [java.util.TimeZone][] strings and [moment-timezone][] and vice versa

## API

### `toTimezone(timezone)`

convert java.util.TimeZone to moment-timezone

### Parameters

| parameter  | type   | description             |
| ---------- | ------ | ----------------------- |
| `timezone` | string | java.util.TimeZone id   |

### Example

```js
const {toTimezone} = require('timezone-java')
toTimezone('AET') // > 'Australia/Sydney'
```

### `toJava(timezone)`

convert moment-timezone to java.util.TimeZone id

### Parameters

| parameter  | type   | description       |
| ---------- | ------ | ----------------- |
| `timezone` | string | moment-timezone   |

### Example

```js
const {toJava} = require('timezone-java')
toJava('Asia/Tomsk') // > 'Etc/GMT+7'
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
