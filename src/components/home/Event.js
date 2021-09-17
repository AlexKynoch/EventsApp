import React from 'react';
import Axios from 'axios';
import "./Events.scss";

function Event({ event, getEvents, editEvent }) {  //event is snippet object so dont have to type props.event.title etc

    async function deleteEvent() {
        await Axios.delete(`http://localhost:5000/event/${event._id}`);

        getEvents();
    }

    return (
        <div className="event">
            <div className="container">
                {event.title && <h2 className="title">{event.title}</h2>}
                {event.description && <h3 className="description">{event.description}</h3>}
                {event.location && <h3 className="location">{event.location}</h3>}
                {event.day && <h4 className="day">{event.day}/</h4>}
                {event.month && <h4 className="month">{event.month}/</h4>}
                {event.year && <h4 className="year">{event.year}</h4>}
                <br />
            </div>
            <button className="btn-edit" onClick={() => editEvent(event)}>Edit</button>
            <button className="btn-delete" onClick={deleteEvent}>Delete</button>
        </div>
    )
}
export default Event;