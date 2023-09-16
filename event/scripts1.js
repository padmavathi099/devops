
const events = [
    {
        id: 1,
        name: "Musical magic by Anirudh Ravichander",
        date: "2023-09-10",
        location: "Alvar Das Stadium,Visakhapatnam.",
        description: "Tap your feet along with Anirudh Ravichander's rocking beat.Hurry up and book your favourite concert.",
        image: 'Anirudh Ravichander.jpg',
        cost: 120.32   //10,000 in rupees
    },
    
    {
        id: 2,
        name: "Tech Fest on evolving Artificial Intelligence",
        date: "2023-09-09",
        location: "Alvar Das stadium,Visakhapatnam.",
        description: "We welcome you to participate in various technical events and enhance your skills in latest and upcoming technologies.",
        image: 'ai.jpg',
        cost: 1.20    //100 in rupees per technical event
    }
];


let loggedIn = false;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform basic authentication (for demonstration purposes)
    if (username === "student" && password === "password") {
        loggedIn = true;
        document.getElementById("login-form").style.display = "none";
        document.getElementById("event-list").style.display = "block";
        displayEvents();
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Function to display events
function displayEvents() {
    if (!loggedIn) {
        return;
    }

    const eventList = document.getElementById("event-list");
    eventList.innerHTML = "";

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.name}" class="event-image">
            <h2>${event.name}</h2>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description}</p>
            <p class="event-cost">$${event.cost}</p>
            <button class="book-button" onclick="
               
                window.location.href = 'payment.html'">Book Now</button>
        `;
        eventList.appendChild(eventCard);
    });
}

// Function to simulate event booking
function bookEvent(eventId) {
    const bookedEvent = events.find(event => event.id === eventId);
    if (bookedEvent) {
        alert(`You have successfully booked the "${bookedEvent.name}" event.`);
    }
}

// Display events when the page loads (only if logged in)
window.onload = () => {
    if (loggedIn) {
        displayEvents();
        document.getElementById("login-form").style.display = "none";
        document.getElementById("event-list").style.display = "block";
    }
};