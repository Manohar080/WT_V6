const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// Function to simulate async delay
async function simulateAsyncProcess(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 2000); // 2 seconds delay
    });
}

// Async listener for userLogin event
customEmitter.on('userLogin', async (username) => {
    console.log(`User "${username}" is logging in...`);

    await simulateAsyncProcess('Checking user credentials...');

    console.log(`User "${username}" successfully logged in!`);
});

// Async listener for sensorReading event
customEmitter.on('sensorReading', async (sensorType, value) => {
    console.log(`Received a reading from ${sensorType}: ${value}`);

    await simulateAsyncProcess(`Processing ${sensorType} data...`);

    if (sensorType === 'temperature' && value > 30) {
        console.log('Warning: Temperature is too high!');
    } else {
        console.log('Sensor data processed successfully.');
    }
});

// Simulate a user logging in
setTimeout(() => {
    customEmitter.emit('userLogin', 'john_doe');
}, 1000);

// Simulate temperature sensor
setTimeout(() => {
    customEmitter.emit('sensorReading', 'temperature', 35);
}, 3000);

// Simulate humidity sensor
setTimeout(() => {
    customEmitter.emit('sensorReading', 'humidity', 50);
}, 5000);
