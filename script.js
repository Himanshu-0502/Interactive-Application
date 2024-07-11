// Get elements from the DOM
const Time = document.getElementById('time');
const Greeting = document.getElementById('greeting');
const Name = document.getElementById('name');

// Function to display the current time and update every second
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Format time with leading zeros and update the DOM
    Time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

// Function to add a leading zero to numbers less than 10
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Function to set the background image and greeting based on the current time
function setBackground() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 10) {
        document.body.style.backgroundImage = "url('Interactive-Application/Images/Morning Image.jpg')";
        Greeting.textContent = 'Good Morning,';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('Interactive-Application/Images/Afternoon Image.jpg')";
        Greeting.textContent = 'Good Afternoon,';
    } else {
        document.body.style.backgroundImage = "url('Interactive-Application/Images/Evening%20Image.jpg')";
        Greeting.textContent = 'Good Evening,';
    }
}

// Function to get the name from local storage and display it
function getName() {
    if (localStorage.getItem('name') === null) {
        Name.textContent = 'Himanshu';
    } else {
        Name.textContent = localStorage.getItem('name');
    }
}

// Function to set the name in local storage when the user presses enter or blurs the input
function setName(event) {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('name', event.target.innerText);
            Name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
}

// Event listeners for setting the name
Name.addEventListener('keypress', setName);
Name.addEventListener('blur', setName);

// Initialize the application
showTime();
setBackground();
getName();
