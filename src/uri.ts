import * as URI from 'uri-js';
import * as qrcode from 'qrcode';

export async function generateTotpUri(
    secret: string,
    accountName: string,
    issuer: string,
    algo: string,
    digits: number,
    period: number
): Promise<string> {
    const sanitizedSecret = secret.replace(/[\s._-]+/g, '').toUpperCase();
    const encodedIssuer = URI.serialize(URI.parse(issuer || ''));  // Use URI.parse and URI.serialize for encoding
    const encodedAccountName = URI.serialize(URI.parse(accountName || ''));  // Use URI.parse and URI.serialize for encoding
    const algorithm = algo || 'SHA1';
    const numDigits = digits || 6;
    const timePeriod = period || 30;

    const uri =
        `otpauth://totp/${encodedIssuer}:${encodedAccountName}` +
        `?secret=${sanitizedSecret}` +
        `&issuer=${encodeURIComponent(issuer || '')}` +  // Use standard JavaScript encodeURIComponent
        `&algorithm=${algorithm}` +
        `&digits=${numDigits}` +
        `&period=${timePeriod}`;

    // Convert TOTP URI to QR code
    const qrCodeDataURL = await qrcode.toDataURL(uri);
    return qrCodeDataURL;
}
