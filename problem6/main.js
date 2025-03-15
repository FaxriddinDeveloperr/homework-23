import { objectToArray, arrayToObject, stringToBoolean } from "./index.js";

const [,, type, value] = process.argv;

if (!type || !value) {
    console.log("Usage: node main.js <Type> <Value>");
    process.exit(1);
}

switch (type.toLowerCase()) {
    case "object":
        console.log(objectToArray(value));
        break;
    case "array":
        console.log(arrayToObject(value));
        break;
    case "string":
        console.log(stringToBoolean(value));
        break;
    case "boolean":
        console.log(value === "true");
        break;
    default:
        console.log("Invalid type! Use: Object, Array, String, Boolean");
}
