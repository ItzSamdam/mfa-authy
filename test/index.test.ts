

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
        expect(typeof generatedKey).toBe('string');
        expect(generatedKey.length).toBeGreaterThan(0);
    });

    test('generateMFAAuthToken should return a non-empty string', () => {
        const generatedKey = generateMFAAuthKey();
        const generatedToken = generateMFAAuthToken(generatedKey);
        expect(typeof generatedToken).toBe('string');
        expect(generatedToken.length).toBeGreaterThan(0);
    });

    test('verifyMFAAuthToken should return true for a valid token', () => {
        const generatedKey = generateMFAAuthKey();
        const generatedToken = generateMFAAuthToken(generatedKey);
        const isTokenValid = verifyMFAAuthToken(generatedKey, generatedToken);
        expect(isTokenValid).toBe(true);
    });

    test('generateTotpUri should return a valid URI', () => {
        const generatedKey = generateMFAAuthKey();
        const totpUri = generateTotpUri(generatedKey, 'user@example.com', 'MyAuthenticatorApp', 'SHA256', 8, 60);
        // Add more specific expectations for the generated URI if needed
        expect(typeof totpUri).toBe('string');
    });
});
