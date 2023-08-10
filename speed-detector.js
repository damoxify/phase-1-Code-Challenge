// A function to check if the driver is above or within the speed limit
function speedChecker(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    const maxDemeritPoints = 12;

    if (speed < speedLimit + kmPerDemerit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Test case
const carSpeed = 135;  //You can replace the carSpeed variable with any value you want to test the program with.
speedChecker(carSpeed);





