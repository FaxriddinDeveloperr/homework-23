// Berilgan massivni o'sish tartibida saralaydigan funksiya
export function sortArray(arr) {
    try {
        const parsedArray = JSON.parse(arr);
        if (!Array.isArray(parsedArray)) throw new Error();

        return parsedArray.sort((a, b) => a - b);
    } catch (error) {
        return "Invalid array format!";
    }
}
