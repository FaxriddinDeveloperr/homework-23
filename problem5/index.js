import { getFreeMemory } from './memory.js';
import { getProcessInfo } from './process.js';
import { getUptime } from './uptime.js';

export function showSystemInfo() {
    console.log("System Information:");
    console.log(`Free Memory: ${getFreeMemory()}`);
    console.log("Process Info:", getProcessInfo());
    console.log(`Uptime: ${getUptime()}`);
}
