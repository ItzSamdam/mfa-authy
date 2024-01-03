// test/test.ts
import {
    generateMFAAuthKey,
    generateMFAAuthToken,
    verifyMFAAuthToken,
    generateTotpUri,
} from '../src/index';

function runTests() {
    // Test generateGoogleAuthKey
    const generatedKey = generateMFAAuthKey();
    console.log('Generated Authenticator Key:', generatedKey);

    // Test generateGoogleAuthToken
    const generatedToken = generateMFAAuthToken(generatedKey);
    console.log('Generated Authenticator Token:', generatedToken);

    // Test verifyGoogleAuthToken
    const isTokenValid = verifyMFAAuthToken(generatedKey, generatedToken);
    console.log('Is Authenticator Token Valid?', isTokenValid);

    // Test generateTotpUri
    const totpUri = generateTotpUri(generatedKey, 'user@example.com', 'MyAuthenticatorApp', 'SHA256', 8, 60);
    console.log('Generated TOTP URI:', totpUri);
}

// Run the tests
runTests();
