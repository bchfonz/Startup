function makeEvent(){
    let dateEl = document.querySelector('#gameDate').value;
    console.log("Make event called")
    let timeEl = document.querySelector('#gameTime').value;
    let locationEl = document.querySelector('#location').value;
    let attendees = 1;
    
    let eventsString;
    let eventsData;
    if (localStorage.getItem('events') != null) {
        eventsString = localStorage.getItem('events');
        eventsData = JSON.parse(eventsString);
    }
    else {
        eventsString = [];
        eventsData = [];
    }
    console.log(eventsData);
    let newEvent = {location : locationEl, eventDate : dateEl, time : timeEl, people : attendees}
    eventsData.push(newEvent);
    localStorage.setItem('events', JSON.stringify(eventsData));
    window.location.href = "sched.html";
}

/*Make a vector to store the events and store it in the local storage.
Include in the vecors the date, location, and a list of people that are 
attending the event. */