function buyTicket(eventName, eventDate) {

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

tickets.push({
event: eventName,
date: eventDate
});

localStorage.setItem("tickets", JSON.stringify(tickets));

alert("Ticket purchased!");

}