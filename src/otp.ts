// src/otp.ts
import * as crypto from 'crypto';
import * as b32 from 'thirty-two';
import * as notp from 'notp';

export function generateOtpKey(): Buffer {
    // 20 cryptographically random binary bytes (160-bit key)
    const key: Buffer = crypto.randomBytes(20);
    return key;
}

export function encodeGoogleAuthKey(bin: Buffer): string {
    const base32: string = b32.encode(bin).toString('utf8').replace(/=/g, '');
    const key: string = base32.toLowerCase().replace(/(\w{4})/g, '$1 ').trim();
    return key;
}

export function generateGoogleAuthKey(): string {
    return encodeGoogleAuthKey(generateOtpKey());
}

export function decodeGoogleAuthKey(key: string): Buffer {
    const unformatted: string = key.replace(/\W+/g, '').toUpperCase();
    const bin: Buffer = b32.decode(unformatted);
    return bin;
}

export function generateGoogleAuthToken(key: string): string {
    const bin: Buffer = decodeGoogleAuthKey(key);
    return notp.totp.gen(bin);
}

export function verifyGoogleAuthToken(key: string, token: string, options?: { window?: number; time?: number }): boolean {
    const bin: Buffer = decodeGoogleAuthKey(key);

    token = token.replace(/\W+/g, '');

    const verificationOptions = {
        window: options?.window || 1,  // Use custom window if provided, otherwise default to 1
        time: options?.time || 30      // Use custom time if provided, otherwise default to 30 seconds
    };

    // Verify with the custom options
    const verificationResult = notp.totp.verify(token, bin, verificationOptions);

    // If verification fails and a default fallback time is provided, try again with the default time
    if (!verificationResult && verificationOptions.time !== 30) {
        const defaultVerificationOptions = { window: verificationOptions.window, time: 30 };
        return notp.totp.verify(token, bin, defaultVerificationOptions);
    }

    return verificationResult;
}
