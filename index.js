const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
// returnFirstTwoDrivers
const returnFirstTwoDrivers = () => drivers.slice(0,2)
console.log(returnFirstTwoDrivers());
// returnLastTwoDrivers
const returnLastTwoDrivers = () => drivers.slice(-2)
console.log(returnLastTwoDrivers());
// selectingDrivers
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers)
// createFareMultiplier()
function createFareMultiplier(n){
    return function(fare){
    return n * fare
    }
}
console.log(createFareMultiplier(4))    
// fareDoubler()
const fareDoubler =(createFareMultiplier) => createFareMultiplier*2;
fareDoubler(20);
// fareTripler()
const fareTripler =(createFareMultiplier) => createFareMultiplier*3;
fareTripler(20);
// selectDifferentDrivers()
const selectDifferentDrivers = (drivers,returnFirstTwoDrivers)=> returnFirstTwoDrivers(drivers);