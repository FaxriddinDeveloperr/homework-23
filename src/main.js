import { filterArray, sortArray, convertToASCII, toUpperCase, toLowerCase } from "./src/index.js";

const [,, command, arg1, arg2] = process.argv;

if (!command || !arg1) {
    console.log("Usage: node main.js <command> <value> [optional second value]");
    process.exit(1);
}

switch (command.toLowerCase()) {
    case "filter":
        console.log(filterArray(arg1, arg2));
        break;
    case "sort":
        console.log(sortArray(arg1));
        break;
    case "ascii":
        console.log(convertToASCII(arg1));
        break;
    case "uppercase":
        console.log(toUpperCase(arg1));
        break;
    case "lowercase":
        console.log(toLowerCase(arg1));
        break;
    default:
        console.log("Invalid command! Use: filter, sort, ascii, uppercase, lowercase");
}
