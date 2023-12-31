// tests/test.ts
import {
    generateMFAAuthKey,
    generateMFAAuthToken,
    verifyMFAAuthToken,
    generateTotpUri,
} from '../src/index';

function runTests() {
    // Test generateGoogleAuthKey
    const generatedKey = generateMFAAuthKey();
    console.log('Generated Google Authenticator Key:', generatedKey);

    // Test generateGoogleAuthToken
    const generatedToken = generateMFAAuthToken(generatedKey);
    console.log('Generated Google Authenticator Token:', generatedToken);

    // Test verifyGoogleAuthToken
    const isTokenValid = verifyMFAAuthToken(generatedKey, generatedToken);
    console.log('Is Google Authenticator Token Valid?', isTokenValid);

    // Test generateTotpUri
    const totpUri = generateTotpUri(generatedKey, 'user@example.com', 'MyApp', 'SHA256', 8, 60);
    console.log('Generated TOTP URI:', totpUri);
}

// Run the tests
runTests();
