# MFA-AUTHY

This TypeScript library provides functions for Multi-Factor Authentication (MFA), including generating MFA authentication keys, tokens, verifying tokens, and generating Time-based One-Time Password (TOTP) URIs.

[![npm version](https://badge.fury.io/js/mfa-authy.svg)](https://badge.fury.io/js/mfa-authy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/mfa-authy)





It Can be with various authenticator devices, including 
- Google Authenticator,
- Authy,  
- Microsoft Authenticator and many more.

## Installation
Install the package using npm:

```bash
npm install mfa-authy
```

## Usage

### Importing the library
```typescript
import {
    generateMFAAuthKey,
    verifyMFAAuthToken,
    generateTotpUri,
} from 'mfa-authy';
```

### Generate Secret Key

```typescript
const generatedKey = generateMFAAuthKey();
console.log('Generated Authenticator Key:', generatedKey);
```


### Verify Token

```typescript
const isTokenValid = verifyMFAAuthToken(generatedKey, generatedToken);
console.log('Is Authenticator Token Valid?', isTokenValid);
```

### Generating URI (barcode/QR code) for Authenticator Apps

This functions returns a base64 encoded URI that can be scanned by authenticator apps, such as Google Authenticator, Authy, and Microsoft Authenticator.
Updated to an Async function to allow for the use of await.
```typescript
const totpUri = await generateTotpUri(generatedKey, 'user@example.com', 'MyAuthenticatorApp', 'SHA256', 8, 60);
```

```base64
data:image/png;base64,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
```
This can be easily displayed in an HTML page using the following code:
```html
<img alt="QR-Code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADkCAYAAACIV4iNAAAAAklEQVR4AewaftIAAAxKSURBVO3BQW4ER5IAQfcC//9lXx3jlEChm1RqNszsH6y1rvCw1rrGw1rrGg9rrWs8rLWu8bDWusbDWusaD2utazysta7xsNa6xsNa6xoPa61rPKy1rvGw1rrGw1rrGg9rrWv88CGVv1QxqfymihOVqeINlaniDZWp4kTlpGJS+U0Vk8pUcaIyVUwqf6niEw9rrWs8rLWu8bDWusYPX1bxTSpvVLyhMlV8k8obKm9UTConFZ+omFR+k8o3VXyTyjc9rLWu8bDWusbDWusaP/wylTcq3qh4Q+VEZaqYVE5UpopJZao4UZkqTipOVKaKSWWq+ETFicpJxaTyTSpvVPymh7XWNR7WWtd4WGtd44f/OJU3Kk5UJpW/pDJVnKhMFW+onKhMFVPFJyomlTcq/pc8rLWu8bDWusbDWusaP/zHVUwqn6iYVKaKT1RMKlPFpPKGyknFN6mcVEwqn6j4X/aw1rrGw1rrGg9rrWv88Msq/k0Vk8onVKaKSeWkYqqYVE4q3lA5UZkqJpWpYqqYVD5RMalMFd9UcZOHtdY1HtZa13hYa13jhy9T+UsqU8WkMlVMKlPFpDJVTCpTxaRyojJVTConKlPFX1KZKiaVqWJS+YTKVHGicrOHtdY1HtZa13hYa13jhw9V/JeoTBUnFScVk8pfqnhD5URlqvhExaTyCZU3Kv5LHtZa13hYa13jYa11jR8+pDJVTConFZPKGxUnFZPKN6lMFZ9QOVH5RMWkMlVMKicVk8pUcVLxm1SmihOVqWJSOan4xMNa6xoPa61rPKy1rvHDv0zlpGJSmVSmiknlRGWqmFSmiqniRGWq+ETFpHJS8Zcq3lA5qZhUpoqTihOVqWJSmSp+08Na6xoPa61rPKy1rvHDhypOKk5UTlSmikllUpkqTlROKt5QmSomlaniDZWp4ptUpooTlTcqfpPKGxU3eVhrXeNhrXWNh7XWNX74ZSqfqHijYlI5qZhUTireUPmEyonKVHGiMlW8ofKbVE4q3qg4UTmp+EsPa61rPKy1rvGw1rrGDx9SeaPiRGVSmSpOVKaKSWVSmSreUJkqflPFicpJxTdVTConKm9UnKhMFZPKScWk8obKVPGJh7XWNR7WWtd4WGtd44dfVjGpTBUnFZPKScWkMlVMKpPKScVUMam8UTGpnKhMFW+oTBWTyknFpDJVTCpTxaQyVXxTxaRys4e11jUe1lrXeFhrXeOHX6ZyonKi8obKVPFGxYnKVHFSMalMKlPFN1WcqLyhcqIyVUwqb6hMFW+oTBUnFZPKScU3Pay1rvGw1rrGw1rrGj/8sopJ5aTiRGWq+ETFicpU8YbKJ1ROKqaKSWWqOKk4UZkqPlHxiYo3VG72sNa6xsNa6xoPa61r2D/4IpWp4kTlJhWTylQxqUwVk8pJxRsqJxVvqJxUnKhMFScqJxVvqJxUTCqfqJhUpopPPKy1rvGw1rrGw1rrGvYPPqDyRsWkclIxqUwVb6icVHxC5Y2KE5VPVEwqU8UbKlPFN6l8U8UbKp+o+MTDWusaD2utazysta7xw5dVTCqTylQxqUwqU8WkclLxhspJxaRyUnGiclLxhsqkMlWcqEwVJypTxaTyiYpJ5aTiROWNihOVb3pYa13jYa11jYe11jXsH3xA5aRiUpkqPqEyVdxM5aTiDZWTiknlpGJSOak4UZkqTlT+UsWkMlX8pYe11jUe1lrXeFhrXeOHL6uYVE5U/pLKScU3qZxUTCpTxaQyVUwqk8pU8ZtUvqniEypTxTepTBWfeFhrXeNhrXWNh7XWNX74ZRWTylQxqUwVb6hMFVPFpPIJlZOKSWVS+YTKVDGpvKFyUjGpTBUnKp9QmSreUJkqpooTld/0sNa6xsNa6xoPa61r/PDLVKaKSeVE5Y2KSWWqOFGZKk4qJpU3KiaVSeUNlU9UTConFd9U8YbKJ1ROKqaKSeWbHtZa13hYa13jYa11jR8+VPFNFW+oTCpvVEwqk8pUMamcqEwVk8pUMalMFW+onKhMFVPFpHJSMalMFZPKicobFW+onKj8pYe11jUe1lrXeFhrXeOHP6byhspU8UbFicpUcaJyE5Wp4kRlqphUTipOVE5UTlROKiaVE5Wp4qRiUvlLD2utazysta7xsNa6xg8fUpkqvqnim1TeUJkqTlSmiknlmyreqJhUTiomlTcqTlTeUHmj4jdVfNPDWusaD2utazysta5h/+CLVKaKSeUvVUwqU8WkMlVMKlPFicpUMan8mypOVKaKSWWq+ITKf0nFNz2sta7xsNa6xsNa6xo/fFnFGxVvqHyTyonKJypOKk5UpopJ5aRiUplUfpPKVHFSMamcVEwqb1RMKlPFX3pYa13jYa11jYe11jV++JDKVDGpnKhMFZPKScWJylTxhspUMalMFScqJxVTxaQyVUwqb1ScqEwqb1RMKlPFpPKXVKaKE5Wp4pse1lrXeFhrXeNhrXWNH35ZxYnKScWkMqm8oTJVTCpTxaQyVUwqU8VJxYnKVHFSMal8omJSmSreqPhExaRyUjGpfKJiUpkqPvGw1rrGw1rrGg9rrWv88KGKE5WpYqqYVE4qJpWpYlKZKiaVNypOKiaVN1SmihOVk4pJ5URlqnhD5aRiUnlD5aTipGJSmVT+TQ9rrWs8rLWu8bDWusYPX6ZyojJVTBUnKlPFN1VMKlPFpDJVnFRMKlPFpPKbVD6hMlVMKm9UnKhMFZPKJypOVH7Tw1rrGg9rrWs8rLWu8cO/TOWbVKaKk4pPVJxUfFPFpDJVnFS8ofKJipOKE5Wp4qRiUpkqTlSmiqliUvmmh7XWNR7WWtd4WGtd44dfVjGpTBVvqJxUnKh8QuWkYlKZKk5UvknlpOKk4kRlUpkqPlHxm1TeUJkqvulhrXWNh7XWNR7WWtf44csqJpWpYlKZKiaVqWJSmSomlZOKSeWNikllqnij4o2K36RyUjGpTConFZPKScWJylQxqZxUvKEyVXziYa11jYe11jUe1lrX+OFDKm+oTBWTylTxhso3VXxC5aRiUpkqTlSmik+oTBUnKlPFpHKiMlVMKpPKGyonFZPKv+lhrXWNh7XWNR7WWtf44csq3lA5UTmpmFROKiaVqeJEZao4qThRmSreqJhUpopJZVKZKiaVqeKNijdUvqniROUmD2utazysta7xsNa6xg9fpvJGxRsqk8pU8UbFpHJScVIxqUwVn1CZKt6oeKPipGJSmSomlU9UTCpvqJxUTCpTxW96WGtd42GtdY2HtdY17B98kcpU8YbKScWJylTxCZWTikllqnhDZaqYVH5TxaTyiYpPqEwVk8pJxSdU3qj4xMNa6xoPa61rPKy1rmH/4ItU3qj4JpVvqphUpopJ5TdVTCqfqJhUPlFxojJVTConFf/LHtZa13hYa13jYa11DfsHH1B5o+INlZOKSWWqOFF5o+INlZOKE5VvqvgmlZOKN1ROKiaVb6qYVKaKSWWq+MTDWusaD2utazysta7xw4cqflPFiconKj6h8kbFJyreUDlROamYVKaKSWVS+UTFGxVvqLyh8pse1lrXeFhrXeNhrXWNHz6k8pcqTip+k8pJxYnKVDGpvKEyVZyonFRMKm9UTConFZPKpDJVvKEyVZyoTBWTym96WGtd42GtdY2HtdY1fviyim9SeUNlqphUTireqPiEylQxqZxUvFExqUwq31RxojJVfFPFN1X8poe11jUe1lrXeFhrXeOHX6byRsUbFZPKGxUnKlPFpDJVTConFZPKiconVE4qJpWp4g2Vk4pJ5RMq36RyUvFND2utazysta7xsNa6xg//cSpTxaQyVbxRcVLxCZWp4g2VqWJSmSo+oTJVTConFZPKVDGpfKJiUjmpOFH5TQ9rrWs8rLWu8bDWusYP/8+onFRMKlPFpHJS8ZsqJpWp4kRlqnhD5RMVk8pU8QmV/5KHtdY1HtZa13hYa13jh19W8ZsqJpWpYlJ5o2JSmSpOVKaKSeWk4kTlDZWp4o2KT6h8k8pUMVV8QmWq+E0Pa61rPKy1rvGw1rrGD1+m8pdUTlROKk5UTlTeULmZyhsqU8VJxaRyojJVTBWTyknFJ1ROKj7xsNa6xsNa6xoPa61r2D9Ya13hYa11jYe11jUe1lrXeFhrXeNhrXWNh7XWNR7WWtd4WGtd42GtdY2HtdY1HtZa13hYa13jYa11jYe11jUe1lrX+D9NKIN6tFQSVAAAAABJRU5ErkJggg=="/>
```

### Example App

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mfaAuthy = require('mfa-authy');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Example user data (replace this with your user authentication system)
const users = {
    'user@example.com': {
        password: 'password123',
        mfaSecret: null, // To be set during MFA setup
        mfaEnabled: false //boolean
    },
};

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// Endpoint to initiate login with 2FA
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists and password is correct
    if (users[email] && users[email].password === password) {
        req.session.user = { email };

        // Check if MFA is already set up for the user
        if (users[email].mfaSecret && users[email].mfaEnabled) {
            res.json({ requireMFA: true });
        } else {
            res.json({ requireMFA: false });
        }
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Endpoint to set up MFA
app.post('/setup-mfa', isAuthenticated, async (req, res) => {
    const { email } = req.session.user;

    // Generate MFA secret and TOTP URI for the user
    users[email].mfaSecret = mfaAuthy.generateMFAAuthKey();
    const totpUri = await mfaAuthy.generateTotpUri(users[email].mfaSecret, email, 'MyApp', 'SHA1', 6, 30);
    const mfaSecret = users[email].mfaSecret.toUpperCase().replace(/\s/g, '');

    res.json({ totpUri, mfaSecret });
});

// Endpoint to enable MFA
app.post('/enable-mfa', isAuthenticated, (req, res) => {
    const { email } = req.session.user;
    const { token } = req.body;

    const isTokenValid = mfaAuthy.verifyMFAAuthToken(users[email].mfaSecret, token);

    if (isTokenValid) {
        users[email].mfaEnabled = true;
        res.json({ success: true, message: 'MFA enabled successfully' });
    } else {
        res.status(401).json({ error: 'Invalid token, MFA not set up for the user' });
    }
});

// Endpoint to verify MFA during login
app.post('/verify-mfa', isAuthenticated, (req, res) => {
    const { email, mfaToken } = req.body;
    if(email != req.session.user.email) return res.status(401).json({ error: 'Unauthorized' } );

    // Verify the MFA token
    const isTokenValid = mfaAuthy.verifyMFAAuthToken(users[email].mfaSecret, mfaToken);

    if (isTokenValid) {
        res.json({ success: true, message: 'Logged in successfully with 2FA' });
    } else {
        res.status(401).json({ error: 'Invalid 2FA token' });
    }
});

// Endpoint to disable MFA
app.post('/disable-mfa', isAuthenticated, (req, res) => {
    const { email } = req.session.user;
    const { password } = req.body;

    // Check if the password is correct
    if (users[email].password !== password) {
        res.status(401).json({ error: 'Invalid password' });
    }

    // Disable MFA for the user
    users[email].mfaEnabled = false;
    users[email].mfaSecret = null;

    res.json({ success: true, message: 'MFA disabled successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

```

### Running Tests
To run the test suite, ensure that you have a testing framework installed (e.g., Jest), and then execute:

```typescript
npm run test
```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.