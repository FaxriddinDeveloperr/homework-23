export function arrayToObject(str) {
    try {
        const arr = JSON.parse(str);
        if (!Array.isArray(arr)) throw new Error();
        return Object.fromEntries(arr);
    } catch (error) {
        return "Invalid array format!";
    }
}
