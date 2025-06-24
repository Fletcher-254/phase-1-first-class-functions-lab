// Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array of driver selector functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function returning a fare multiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// Double the fare
const fareDoubler = createFareMultiplier(2);

// Triple the fare
const fareTripler = createFareMultiplier(3);

// Select different drivers based on the function passed
const selectDifferentDrivers = function(drivers, whichDrivers) {
  return whichDrivers(drivers);
};

