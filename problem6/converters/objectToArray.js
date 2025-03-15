export function objectToArray(str) {
    try {
        const obj = JSON.parse(str);
        if (typeof obj !== "object" || Array.isArray(obj)) throw new Error();
        return Object.entries(obj);
    } catch (error) {
        return "Invalid object format!";
    }
}
