# MFA-AUTHY

This TypeScript library provides functions for Multi-Factor Authentication (MFA), including generating MFA authentication keys, tokens, verifying tokens, and generating Time-based One-Time Password (TOTP) URIs.
It Can be with various authenticator devices, including Google Authenticator, Authy, and Microsoft Authenticator.

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
    generateMFAAuthToken,
    verifyMFAAuthToken,
    generateTotpUri,
} from 'mfa-authy';
```

### Generating MFA Authentication Key

```typescript
const generatedKey = generateMFAAuthKey();
console.log('Generated Authenticator Key:', generatedKey);
```
### Generating MFA Authentication Token

```typescript
const generatedToken = generateMFAAuthToken(generatedKey);
console.log('Generated Authenticator Token:', generatedToken);
```

### Verifying MFA Authentication Token

```typescript
const isTokenValid = verifyMFAAuthToken(generatedKey, generatedToken);
console.log('Is Authenticator Token Valid?', isTokenValid);
```

### Generating TOTP URI

```typescript
const totpUri = generateTotpUri(generatedKey, 'user@example.com', 'MyAuthenticatorApp', 'SHA256', 8, 60);
console.log('Generated TOTP URI:', totpUri);
```

### Running Tests
To run the test suite, ensure that you have a testing framework installed (e.g., Jest), and then execute:

```typescript
npm run test
```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.