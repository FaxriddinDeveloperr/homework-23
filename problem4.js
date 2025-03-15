import os from 'os';
import process from 'process';

if (process.argv[2] === "check-memory") {
    const freeMemoryMB = os.freemem() / (1024 * 1024);
    console.log(`Free memory: ${freeMemoryMB.toFixed(2)} MB`);
} else {
    console.log("Usage: node problem4.js check-memory");
}


// run berish -->   node problem4.js check-memory  <--  :)
