

// test/test.ts
import {
    generateMFAAuthKey,
    generateMFAAuthToken,
    verifyMFAAuthToken,
    generateTotpUri,
} from '../src/index';

describe('MFA Functions', () => {
    test('generateMFAAuthKey should return a non-empty string', () => {
        const generatedKey = generateMFAAuthKey();
        console.log(generatedKey);  // Print the generated key for manual verification
        expect(typeof generatedKey).toBe('string');
        expect(generatedKey.length).toBeGreaterThan(0);
    });

    test('generateMFAAuthToken should return a non-empty string', () => {
        const generatedKey = generateMFAAuthKey();
        const generatedToken = generateMFAAuthToken(generatedKey);
        console.log(generatedKey, generatedToken);  // Print the generated key and token for manual verification
        expect(typeof generatedToken).toBe('string');
        expect(generatedToken.length).toBeGreaterThan(0);
    });

    test('verifyMFAAuthToken should return true for a valid token', () => {
        const generatedKey = generateMFAAuthKey();
        const generatedToken = generateMFAAuthToken(generatedKey);
        const isTokenValid = verifyMFAAuthToken(generatedKey, generatedToken);
        console.log(generatedKey, generatedToken, isTokenValid);  // Print the generated key, token, and verification result for manual verification
        expect(isTokenValid).toBe(true);
    });

    test('generateTotpUri should return a valid URI', async () => {
        const generatedKey = generateMFAAuthKey();
        const totpUri = await generateTotpUri(generatedKey, 'user@example.com', 'MyAuthenticatorApp', 'SHA256', 8, 60);
        console.log(totpUri);  // Print the generated URI for manual verification
        // Add more specific expectations for the generated URI if needed
        expect(typeof totpUri).toBe('string');
    });
});
