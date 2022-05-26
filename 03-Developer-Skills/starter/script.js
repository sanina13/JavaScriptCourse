// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// What is temp amplitude? Answer: difference beetween hifhest and lowest temp
// How to compute max and min temperatures?
//what's a sensor error? And what to do?

//2- Breaking up the problem
// How to ignore errors?
// Find max value in array
// Find min value in array
// Subtract min from max

const calcTempAmplitude = function (arr) {
  let maxValue = arr[0];
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof curTemp !== 'number') continue;
    if (maxValue < curTemp) maxValue = curTemp;
    if (minValue > curTemp) minValue = curTemp;
  }

  return `Maior: ${maxValue}, Menor: ${minValue}, Amplitude: ${
    maxValue - minValue
  }`;
};

console.log(calcTempAmplitude(temperatures));

//2 arrays of temps
// - Merge two arrays
// how to merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let maxValue = temps[0];
  let minValue = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (maxValue < curTemp) maxValue = curTemp;
    if (minValue > curTemp) minValue = curTemp;
  }

  return `Maior: ${maxValue}, Menor: ${minValue}, Amplitude: ${
    maxValue - minValue
  }`;
};

console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]));*/

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'cels',
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  console.table(measurment);

  const kelvin = measurment.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let maxValue = 0;
  let minValue = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (maxValue < curTemp) maxValue = curTemp;
    if (minValue > curTemp) minValue = curTemp;
  }

  return `Maior: ${maxValue}, Menor: ${minValue}, Amplitude: ${
    maxValue - minValue
  }`;
};

console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
