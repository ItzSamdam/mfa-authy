/* eslint-disable @typescript-eslint/no-var-requires */
import { generateSecret, generateToken, verifyToken } from "./src/index";

console.log("############################################");
console.log("Generating New MFA Secret");
const newSecret = generateSecret({ name: "My Authenticator App", account: "itzSamdam" });
console.log(newSecret);
console.log("############################################");

console.log("############################################");
console.log("Generating New Token With Secret " + newSecret.secret);
const newToken = generateToken(newSecret.secret);
console.log(newToken);
console.log("############################################");

console.log("############################################");
console.log("Verifying Valid Token");
console.log(verifyToken(newSecret.secret, newToken.token));
console.log("############################################");

console.log("############################################");
console.log("Verifying Valid Token - Window: 1");
console.log(verifyToken(newSecret.secret, newToken.token, 1));
console.log("############################################");

console.log("############################################");
console.log("Verifying Valid Token - Window: -3");
console.log(verifyToken(newSecret.secret, newToken.token, -3));
console.log("############################################");

console.log("############################################");
console.log("Verifying Invalid Token");
console.log(verifyToken(newSecret.secret, "33133"));
console.log("############################################");

console.log("############################################");
console.log("Test Complete")
console.log("Done - Star Me On Github");