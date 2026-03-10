const event = JSON.parse(localStorage.getItem("selectedEvent"));

document.getElementById("eventTitle").textContent = event.name;
document.getElementById("eventImage").src = event.image;
document.getElementById("eventDescription").textContent = event.description;

document.getElementById("eventMeta").textContent =
`${event.city} · ${new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;

document.getElementById("buyBtn").onclick = () => {
    buyTicket(event.name, event.date);
};