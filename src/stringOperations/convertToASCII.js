// Berilgan matnning ASCII kodlarini qaytaradi
export function convertToASCII(str) {
    return str.split("").map((char) => char.charCodeAt(0));
}
