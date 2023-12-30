// src/uri.ts
import { encodeURI, encodeURIComponent } from 'uri-js';
import { generateGoogleAuthKey } from './otp';

export function generateTotpUri(
    secret: string,
    accountName: string,
    issuer: string,
    algo: string,
    digits: number,
    period: number
): string {
    return (
        'otpauth://totp/' +
        encodeURI(issuer || '') +
        ':' +
        encodeURI(accountName || '') +
        '?secret=' +
        secret.replace(/[\s\.\_\-]+/g, '').toUpperCase() +
        '&issuer=' +
        encodeURIComponent(issuer || '') +
        '&algorithm=' +
        (algo || 'SHA1') +
        '&digits=' +
        (digits || 6) +
        '&period=' +
        (period || 30)
    );
}

// Export other functions/constants related to URI handling, if any.
