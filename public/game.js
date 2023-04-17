function makeEvent(){
    console.log("Make event called")
    let dateEl = document.querySelector('#gameDate').value;
    let timeEl = document.querySelector('#gameTime').value;
    let locationEl = document.querySelector('#gameLocation').value;
    console.log("Check location");
    
    console.log("Check 1");
    let eventsString;
    let eventsData;
    if (localStorage.getItem('events') != null) {
        eventsString = localStorage.getItem('events');
        eventsData = JSON.parse(eventsString);
        console.log("non-null eventsString")
    }
    else {
        eventsString = [];
        eventsData = [];
        console.log("null eventsString");
    }
    console.log(eventsData);
    let newEvent = {location : locationEl, eventDate : dateEl, time : timeEl, people : attendees}
    console.log("Check 2");
    eventsData.push(newEvent);
    localStorage.setItem('events', JSON.stringify(eventsData));
    console.log("Check 3");
    window.location.href = "sched.html";
}

/*Make a vector to store the events and store it in the local storage.
Include in the vecors the date, location, and a list of people that are 
attending the event. */