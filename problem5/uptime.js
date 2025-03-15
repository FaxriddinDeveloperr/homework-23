import os from 'os';

export function getUptime() {
    return `${(os.uptime() / 60).toFixed(2)} minutes`;
}
