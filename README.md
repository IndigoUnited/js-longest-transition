# longest-transition

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/longest-transition
[downloads-image]:http://img.shields.io/npm/dm/longest-transition.svg
[npm-image]:http://img.shields.io/npm/v/longest-transition.svg
[travis-url]:https://travis-ci.org/IndigoUnited/js-longest-transition
[travis-image]:http://img.shields.io/travis/IndigoUnited/js-longest-transition/master.svg
[coveralls-url]:https://coveralls.io/r/IndigoUnited/js-longest-transition
[coveralls-image]:https://img.shields.io/coveralls/IndigoUnited/js-longest-transition/master.svg
[david-dm-url]:https://david-dm.org/IndigoUnited/js-longest-transition
[david-dm-image]:https://img.shields.io/david/IndigoUnited/js-longest-transition.svg
[david-dm-dev-url]:https://david-dm.org/IndigoUnited/js-longest-transition#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/IndigoUnited/js-longest-transition.svg

Cross-browser longest transition getter.

This module reads all transitions of an element and provides the longest one.

```js
import longestTransition from 'longest-transition';
// or
const longestTransition = window.longestTransition;

const element = document.getElementById('transitioning-element');

const time = longestTransition(element);
/*
    `time` will be something like:

    {
        property: 'height',
        duration: 200,
        delay: 100
    }

    Note that time is in milliseconds
*/
```


## Installation

`$ npm install longest-transition`


## Usage

```js
longestTransition(element)
```

- `element`: The element that is transitioning.
- Returns a number, in seconds.

## Tests

`$ npm test`   
`$ npm test-cov` to get coverage report


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
