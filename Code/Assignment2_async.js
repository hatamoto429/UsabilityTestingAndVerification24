// 2nd Home Assignment - Turn 10_async.js into asynchronous code 
// + How to handle errors with async in javascript (try, catch)

const { ConsoleLogEntry } = require("selenium-webdriver/bidi/logEntries");
let people = ["Xi", "Anja", "Kevin", "Alex", "Lena", "Adrian", "Erik"];

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

const isGuestsComing = true;
const guests = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isGuestsComing) {
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


const party = async () => {

    let checkKayo = await kayo
        .then(response => { console.log(response) })
        .catch(error => console.log(error));

    let checkGuests = await guests
        .then(response => { console.log(response) })
        .catch(error => console.log(error))

    //console.log("async code test");
};

party();