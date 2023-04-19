import React from 'react';

export function Sched(){
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/events')
            .then ((response) => response.json())
            .then((events) => {
                setEvents(events);
                localStorage.setItem('events', JSON.stringify(events));
            })
            .catch(() => {
                const eventsText = localStorage.getItem('events');
                if(eventsText){
                    setEvents(JSON.parse(eventsText));
                }
            });
    }, []);

    const eventRows = [];
    if(events.length){
        for(const[i, event] of events.entries()){
            eventRows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{event.location}</td>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.atendees}</td>
                </tr>
            )
        }
    }
    return(
        <main className="container-fluid text-center">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>People attending</th>
                  <th>Click to RSVP</th>
                </tr>
              </thead>
              <tbody id="events">{eventRows}</tbody>
            </table>
        </main>
    );
}