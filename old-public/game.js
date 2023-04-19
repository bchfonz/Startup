async function makeEvent() {
    console.log("Make event called")
    let dateEl = document.querySelector('#gameDate').value;
    let timeEl = document.querySelector('#gameTime').value;
    let locationEl = document.querySelector('#gameLocation').value;
    console.log("Check location");
    
    console.log("Check 1");
    let eventsString;
    let eventsData;
    let attendees = 1;

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
    eventJSON = JSON.stringify(eventsData);
    //localStorage.setItem('events', eventJSON);
    console.log("Check 3");


    try {
        const response = await fetch('/api/events', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newEvent),
        });
  
        // Store what the service gave us as the high scores
        const events = await response.json();
        localStorage.setItem('events', eventJSON);
    } catch {
        // If there was an error then just track scores locally
        console.log("Couldn't connect to DB, printing this instead?");
    }
    window.location.href = "sched.html";
    
}

/*Make a vector to store the events and store it in the local storage.
Include in the vecors the date, location, and a list of people that are 
attending the event. */