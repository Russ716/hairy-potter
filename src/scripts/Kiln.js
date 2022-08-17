import { makePottery } from "./PotteryWheel.js"
export const firePottery = (workInProgress, kilnTemp) => {
    workInProgress.fired = true
    if (kilnTemp > 2200) {
        workInProgress.cracked = true
    }
    else {
        workInProgress.cracked = false
    }
    return workInProgress  
}
/*
// Define a scripts/Kiln.js module.
//~ Define and export a function named firePottery that is responsible for acting as a kiln.
// The function must accept the following values as input (i.e. it needs parameters), in the following order. 
    //^ An object representing a piece of pottery that was made at the wheel in the makePottery function.
    //^ A number specifying the firing temperature of the kiln.
// The function must add a new property of fired with the value of true to the object.
//& The function must add a new property of cracked to the object.
    //If the temperature of the kiln is above 2200 degrees then cracked property must have a value of true.
    //^ If the temperature of the kiln is at, or below, 2200 degrees then cracked property must have a value of false.
// After both of the new properties have been added, return the augmented object.
! THEN PUSH YOUR CODE TO GITHUB
*/