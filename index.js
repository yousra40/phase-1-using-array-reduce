const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((curr, acc) => curr + acc);

console.log(totalBatteries);
