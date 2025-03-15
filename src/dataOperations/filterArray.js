// Berilgan massivni filtrlaydigan funksiya
export function filterArray(arr, condition) {
    try {
        const parsedArray = JSON.parse(arr);
        if (!Array.isArray(parsedArray)) throw new Error();
        
        return parsedArray.filter((x) => eval(condition.replace("x", x)));
    } catch (error) {
        return "Invalid array format or condition!";
    }
}
