export function stringToBoolean(str) {
    return ["true", "1", "yes"].includes(str.toLowerCase());
}
