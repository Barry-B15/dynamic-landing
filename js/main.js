// Select the DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'); // use commas to avoid repeating const

// Options for AM PM (may skip, we added this at the end) and add it to Output Time
const showAmPm = true;

// Show the time // to update every sec
function showTime() {
    //let today = new Date(2020, 3, 3, 8, 33, 30), //2020-03-03 8:33 AM // to hard code a date and time for testing purposes
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set AM or PM (set the time to a var depending on time of the day)
    const amPm = hour >= 12 ? 'PM' : 'AM';
    // turnary? pm :(else) am- this is a shorthand if statement

    // 12 hr Format to have 12 hrs not 13, 14, ---
    hour = hour % 12 || 12; // (|| is or)

    // Output Time
    // time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;  // this goes with test Run, below
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`; // addZero() to the mins and secs then RUN

    // set the time by calling the func in itself, to show the time every sec (1000milisecs)
    setTimeout(showTime, 1000);
}
/*
//Test Run // save and run this 1st before the addZero func
showTime();
*/

//Add Zeros so that we don't get things like 1:1:9 but 1:01:09
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
    // int n to base 10   if less than 10, add 0, else nothing + the number
}

/**
// RUN // save and run this before adding the set background
showTime();
*/

// Set background and greeting depending on time of the day
function setBgGreet() {
    //let today = new Date(2020, 3, 3, 8, 33, 30), //2020-03-03 8:33 AM (hardcoding time for testing purposes)
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('image/morning-field.jpg')";
        greeting.textContent = 'Good Morning,';
        document.body.style.color = 'green';
        document.body.style.backgroundSize = "cover";
    } else if (hour < 18) {
        // afternoon
        document.body.style.backgroundImage = "url('image/afternoon.png')";
        greeting.textContent = 'Good Afternoon,';
        document.body.style.backgroundSize = "cover";
    } else {
        // Evening
        document.body.style.backgroundImage = "url('image/night-galaxy.jpg')"; // images not showing on local machine, need server? was warned
        greeting.textContent = 'Good Evening,';
        document.body.style.color = 'white';
        document.body.style.backgroundSize = "cover";
    }
}
/**
// RUN 
showTime();
// call the bgGreet
setBgGreet();
*/

// Get the name for display
function getName() {
    if (localStorage.getItem('name') === null) { // check if there's a 'name' in local storage
        name.textContent = '[Enter Name]'; // if nothing, request for one
    } else {
        name.textContent = localStorage.getItem('name'); // if there's 'name' stored, take that
    }
}

// Set/store the name entered
function setName(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) { // key no 13 is the enter key
            localStorage.setItem('name', e.target.innerHTML);
            // stop the key from starting new line
            name.blur()
        }
    } else { // blur
        localStorage.setItem('name', e.target.innerHTML);
    }
    // check local storage: devtools > applicatio > local Storage 
    // to delete: local storage > name > click the circle at top right corner
}

// Get the focus to display
function getFocus() {
    if (localStorage.getItem('focus') === null) { // check if there's a 'focus' in local storage
        focus.textContent = '[Enter Focus]'; // if nothing, request for one
    } else {
        focus.textContent = localStorage.getItem('focus'); // if there's 'focus' stored, take that
    }
}

// Set/store the name entered
function setFocus(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) { // key no 13 is the enter key
            localStorage.setItem('focus', e.target.innerHTML);
            // stop the key from starting new line
            focus.blur()
        }
    } else { // blur
        localStorage.setItem('focus', e.target.innerHTML);
    }
    // check local storage: devtools > applicatio > local Storage 
    // to delete: local storage > focus > click the circle at top right corner
}

// set/store the name when user clicks enter or moves focus(blur)
name.addEventListener('keypress', setName); // now go make the setName() func below getName()
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus); // now go make the setName() func below setName()
focus.addEventListener('blur', setFocus);

// RUN 
showTime();
// call the bgGreet
setBgGreet();
// get the name to display
getName();
getFocus();


// Source: https://www.youtube.com/watch?v=fSTQzlprGLI
// Traversy Media