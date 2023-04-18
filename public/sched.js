
async function loadEvents() {
    let events = [];
    try {
      // Get the latest events from the service
      const response = await fetch('/api/events');
      events = await response.json();
      ///console.log("Hello")
      // Save the events in case we go offline in the future
      localStorage.setItem('events', JSON.stringify(events));
    } catch {
      // If there was an error then just use the last saved events
      const eventsText = localStorage.getItem('events');
      //console.log("hell on earth")
      if (eventsText) {
        events = JSON.parse(eventsText);
        //console.log(events)
      }
    }
    console.log("testingtesting")
    displayEvents(events);
}
  
function displayEvents(events) {
  const tableBodyEl = document.querySelector('#events');

  tableBodyEl.innerHTML = '';

  if (events.length) {
    // Update the DOM with the events
    for (const [i, event] of events.entries()) {
      const positionTdEl = document.createElement('td');
      const locaTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');
      const timeTdEl = document.createElement('td');
      const peopleTdEl = document.createElement('td');
      const buttTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      locaTdEl.textContent = event.location;
      dateTdEl.textContent = event.eventDate;
      timeTdEl.textContent = event.time;
      peopleTdEl.textContent = event.people;
      
      let button = document.createElement('button');
      button.textContent = 'Increment';
      button.innerText = 'RSVP';
      button.className = 'table-button';
      //button.setAttribute(); // 'onclick', incrementing function here
      button.addEventListener('click', () => {
        incrementPeople(i);
      })


      buttTdEl.appendChild(button);


      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(locaTdEl);
      rowEl.appendChild(dateTdEl);
      rowEl.appendChild(timeTdEl);
      rowEl.appendChild(peopleTdEl);
      rowEl.appendChild(buttTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=6>Be the first to plan an event</td></tr>';
  }
}
  
loadEvents();
  
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

function displayQuote(data) {
  const containerEl = document.querySelector("#quote");

  const quoteEl = document.createElement("p");
  quoteEl.classList.add("quote");
  const authorEl = document.createElement("p");
  authorEl.classList.add("author");

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;

  containerEl.appendChild(quoteEl);
  containerEl.appendChild(authorEl);
}

function callService(url, displayCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCallback(data);
    });
}
callService("https://api.quotable.io/random", displayQuote);



// Websocket stuff

let socket;

function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
    displayMsg('system', 'game', 'connected');
  };
  socket.onclose = (event) => {
    displayMsg('system', 'game', 'disconnected');
  };
}

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

// function broadcastEvent(from, type, value) {
//   const event = {
//     from: from,
//     type: type,
//     value: value,
//   };
//   socket.send(JSON.stringify(event));
// }

configureWebSocket();
