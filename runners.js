let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 19;
if (runnersAge >= 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000;
}
if (runnersAge >= 18 && registeredEarly === true) {
  console.log(`You will race at 9:30am ${raceNumber}!`);
} else if (runnersAge >= 18 && registeredEarly === false) {
  console.log(`You will race at 11:00am ${raceNumber}`);
} else {
  console.log(`Youth registrants run at 12:30pm. ${raceNumber}`);
}
