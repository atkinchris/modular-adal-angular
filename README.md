# modular-adal-angular
This is a shim to bring module support to AzureAD's [azure-activedirectory-library-for-js](https://github.com/AzureAD/azure-activedirectory-library-for-js).

## Important Repository Change

In versions `<=0.3.0`, this shim was a fork of the AzureAD library, with module support added inline.
While this worked, it was difficult to maintain, especially as Microsoft updated their library.

Starting with version `1.0.0` of this shim, it now imports the official [`adal-angular`](https://www.npmjs.com/package/adal-angular) library from `npm` and exports the Angular module name.
This should allow easier updating of the underlying library, without rebases.

It also removes the dependency on Webpack's [`expose-loader`](https://github.com/webpack/expose-loader),
directly assigning the imported libary to `window.AuthenticationContext`. This should allow it to work with other bundlers.


## Installation and Usage

First, install the package from [npm](https://www.npmjs.com/package/modular-adal-angular) into your application.

```
npm install --save modular-adal-angular
```

Then import it into your application's code.

```js
// traditional require style
var adalAngular = require('modular-adal-angular');

// ES6 fanciness
import adalAngular from 'modular-adal-angular';
```

Finally, add it as a module dependency on your Angular application.

```js
angular.module('myApp', [adalAngular]);
```


## If you're not using Angular

If you're only using the `AuthenticationContext` (`adal.js`) part of the library, and do not need the Angular module (`adal-angular.js`), use the official [`adal-angular`](https://www.npmjs.com/package/adal-angular) package. You can simply import it and assign it to `window.AuthenticationContext`.

```js
window.AuthenticationContext = require('adal-angular');
```


## Why do I need this, and why is `AuthenticationContext` on my `window` object?

The `adal-angular` library, at the time of this shims conception, did not support modules or expose any exports.
This made it difficult to use with bundlers, such as [Webpack](https://github.com/webpack/webpack).
In anger, the library was forked, and module support was added inline, allowing it to be used with `require(...)` and `import` statements.

The Angular module in the library expects `AuthenticationContext` to be available on the `window` object.
Additionally, at times during the authentication process, iframes may be also be spawned.
These attempt to call `window.parent.AuthenticationContext`.
As such, this module exposes `AuthenticationContext` on the `window` object, to prevent things breaking.
