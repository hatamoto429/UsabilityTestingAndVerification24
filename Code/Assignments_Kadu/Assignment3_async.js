// --- 3nd Home Assignment ---
// Turn following code into asynchronous code and handle async errors in javascript with try and catch 

const { ConsoleLogEntry } = require("selenium-webdriver/bidi/logEntries");

// Example Array of guests
let people = ["Xi", "Anja", "Kevin", "Alex", "Lena", "Adrian", "Erik"];

// Checking for Kayo 
const isKayoComing = true;
const kayo = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isKayoComing) {
            console.log("|---------------------------------")
            resolve("| Kayo arrived with the cake!");
        } else {
            reject("| Kayo can not come!");
            console.log("|---------------------------------")
        }
    }, 3000);
});

// Checking for other Guests
const areGuestsComing = true;
const guests = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (areGuestsComing) {
            console.log("|----- The party has started -----");
            people.forEach((p) => console.log("| " + p + " Arrived!"));
            resolve("| All guests have arrived!");
            console.log("|----------------------------------");
        } else {
            reject("| Guests can not come!");
            console.log("|---------------------------------");
        }
    }, 3000);
});

// Call both functions asynchronous
const party = async () => {

    let checkKayo = await kayo
        // Error handling kayo function 
        .then(response => { console.log(response) })
        .catch(error => console.log(error));

    let checkGuests = await guests
        //Error handling guest function 
        .then(response => { console.log(response) })
        .catch(error => console.log(error))

    //console.log("async code test");
};

party();