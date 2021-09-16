import React from 'react';
import Axios from 'axios';

function Event({ event, getEvents, editEvent }) {  //event is snippet object so dont have to type props.event.title etc

    async function deleteEvent() {
        await Axios.delete(`http://localhost:5000/event/${event._id}`);

        getEvents();
    }

    return (
        <div className="event">
            {event.title && <h2>{event.title}</h2>}
            {event.description && <p><h3>{event.description}</h3></p>}
            {event.location && <h3>{event.location}</h3>}
            {event.day && <h4>{event.day}/</h4>}
            {event.month && <h4>{event.month}/</h4>}
            {event.year && <h4>{event.year}</h4>}
            <br />
            <button onClick={() => editEvent(event)}>Edit</button>
            <button onClick={deleteEvent}>Delete</button>
        </div>
    )
}
export default Event;