class CaesarCipher {
    constructor(shift) {
        if (shift < 1 || shift > 26) {
            throw new Error("Shift qiymati 1 dan 26 gacha bo'lishi kerak.");
        }
        this.shift = shift;
    }

    encode(text) {
        return text.split('').map(char => this.#shiftChar(char, this.shift)).join('');
    }

    decode(text) {
        return text.split('').map(char => this.#shiftChar(char, -this.shift)).join('');
    }

    #shiftChar(char, shift) {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';
        
        if (isUpperCase || isLowerCase) {
            const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
        }
        return char;
    }
}

const cipher = new CaesarCipher(8);
const encodedText = cipher.encode("Hello, World!"); 
console.log(encodedText); 
const decodedText = cipher.decode(encodedText);
console.log(decodedText); 
