// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0, 2);

};

const returnLastTwoDrivers = function (driversArray) {
    return driversArray.slice(-2);
  
  };


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  };

