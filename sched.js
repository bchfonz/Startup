
async function loadEvents() {
    let events = [];
    try {
      // Get the latest events from the service
      const response = await fetch('/api/events');
      events = await response.json();
      // Save the events in case we go offline in the future
      localStorage.setItem('events', JSON.stringify(events));
    } catch {
      // If there was an error then just use the last saved events
      const eventsText = localStorage.getItem('events');
      if (eventsText) {
        events = JSON.parse(eventsText);
      }
    }
    console.log("testingtesting")
    displayEvents(events);
  }
  
  function displayEvents(events) {
    const tableBodyEl = document.querySelector('#events');
  
    if (events.length) {
      // Update the DOM with the events
      for (const [i, event] of events.entries()) {
        const positionTdEl = document.createElement('td');
        const locaTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
        const timeTdEl = document.createElement('td');
        const peopleTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        locaTdEl.textContent = event.loca;
        dateTdEl.textContent = event.date;
        timeTdEl.textContent = event.time;
        peopledEl.textContent = event.people;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(locaTdEl);
        rowEl.appendChild(dateTdEl);
        rowEl.appendChild(timeTdEl);
        rowEl.appendChild(peopleTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to plan an event</td></tr>';
    }
  }
  

function incrementPeople(eventIndex) {
  // Get the current event data from local storage
  const eventsText = localStorage.getItem('events');
  const events = JSON.parse(eventsText);

  // Find the event with the given index
  const event = events[eventIndex];

  // Increment the people count
  event.people++;

  // Update the event data in local storage
  localStorage.setItem('events', JSON.stringify(events));

  // Update the table display
  displayEvents(events);
}
  
//   loadEvents();
  
// function addPeople(){
//   let numPeople = localStorage.getItem('people');
//   people = people + 1;
  

  
// }
