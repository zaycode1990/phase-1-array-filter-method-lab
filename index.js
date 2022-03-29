/*
findMatching- This function 
takes an array of drivers' names and
a string as arguments, and returns
the matching list of drivers. 
The function should be case insensitive.

fuzzyMatch - This function takes an 
array of drivers' names and a string as
arguments for querying the array, and returns
all drivers whose names begin 
with the provided letters.

matchName - This function takes an array of 
driver objects and a string as arguments.
Each driver object has two 
properties: name and hometown. The function 
should return each element whose name property 
matches the provided string argument
*/


function findMatching(arr, string) {
    let newArray = []
    for (let driver of arr) {
        if (driver.toLowerCase() === string.toLowerCase()) {
             newArray.push(driver)
        }
    
    }
    return newArray
    }
console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(arr, string) {
    let newArray = []
    for (let driver of arr) {
        if (driver.charAt(0,2) === string.charAt(0,2)) {
             newArray.push(driver)
        }
    
    }
    return newArray
    }


    

    function matchName(arrOfObject, string) {
        let newArray = []
        for (let driver of arrOfObject) {
            if (driver.name === string) {
                 newArray.push(driver)
            }
        
        }
        return newArray
        }


console.log(matchName(drivers,'Bobby'))
