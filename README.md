# node-2fa 
Node Two-and multi-factor authentication (2FA / MFA) for node.js

[![Build Status](https://travis-ci.org/bellstrand/node-2fa.svg?branch=master)](https://travis-ci.org/bellstrand/node-2fa) [![Coverage Status](https://coveralls.io/repos/github/bellstrand/node-2fa/badge.svg?branch=master)](https://coveralls.io/github/bellstrand/node-2fa?branch=master) [![npm version](https://badge.fury.io/js/node-2fa.svg)](https://badge.fury.io/js/node-2fa) [![Dependency Status](https://david-dm.org/bellstrand/node-2fa.svg)](https://david-dm.org/bellstrand/node-2fa) [![devDependency Status](https://david-dm.org/bellstrand/node-2fa/dev-status.svg)](https://david-dm.org/bellstrand/node-2fa#info=devDependencies)

Many websites employ the following apps to provide you with 6-digit codes when you log in, enhancing security:

Authy (shown above) Android, iOS, Chrome, Linux, OS X, and BlackBerry
Google Authenticator for Android and iPhone
GAuth FxOS for Android | Windows Phone Microsoft Authenticator
To name a few, there are numerous services that support MFA. These include Digital Ocean, Facebook, Microsoft, Google, and Facebook.

In order to offer codes that are precisely compatible with all other Authenticator apps and services that use them, this module uses notp, which implements TOTP (RFC 6238), the Authenticator standard, which is built on HOTP (RFC 4226).

## Installation

```bash
npm install node-2fa
```

## Usage

```javascript
var tfa = require('node-2fa');
```

### Generate a new secret

```javascript
var secret = tfa.generateSecret();
```

### Verify a token

```javascript
var verify = tfa.verify(value);
```