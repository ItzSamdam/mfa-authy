// src/otp.ts
import * as crypto from 'crypto';
import * as b32 from 'thirty-two';
import * as notp from 'notp';

export function generateOtpKey(): Buffer {
    // 20 cryptographically random binary bytes (160-bit key)
    const key: Buffer = crypto.randomBytes(20);
    return key;
}

export function encodeMFAAuthKey(bin: Buffer): string {
    const base32: string = b32.encode(bin).toString('utf8').replace(/=/g, '');
    const key: string = base32.toLowerCase().replace(/(\w{4})/g, '$1 ').trim();
    return key;
}

export function generateMFAAuthKey(): string {
    return encodeMFAAuthKey(generateOtpKey());
}

export function decodeMFAAuthKey(key: string): Buffer {
    const unformatted: string = key.replace(/\W+/g, '').toUpperCase();
    const bin: Buffer = b32.decode(unformatted);
    return bin;
}

export function generateMFAAuthToken(key: string): string {
    const bin: Buffer = decodeMFAAuthKey(key);
    return notp.totp.gen(bin);
}

export function verifyMFAAuthToken(key: string, token: string, option?: { window: number, time: number }): boolean {
    const bin: Buffer = decodeMFAAuthKey(key);

    // window is +/- 1 period of 30 seconds
    const verificationResult = notp.totp.verify(token, bin, { window: option?.window || 1, time: option?.time || 30 });

    // Explicitly return a boolean value
    return verificationResult !== null;
}
