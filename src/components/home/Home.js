
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Event from "./Event";
import EventEditor from "./EventEditor";
import "./Home.scss";


function Home() {

    const [events, setEvents] = useState([]);
    const [eventEditorOpen, setEventEditorOpen] = useState(false);
    const [editEventData, setEditEventData] = useState(null);

    useEffect(() => {
        getEvents();
    }, []);

    async function getEvents() {
        const eventsRes = await Axios.get("http://localhost:5000/event/");

        setEvents(eventsRes.data);
    }

    function editEvent(eventData) {
        setEditEventData(eventData);
        setEventEditorOpen(true);
    }


    function renderEvents() {

        //sort events array so newest appear at top
        let sortedEvents = [...events];  //makes clone of events array
        sortedEvents = sortedEvents.sort((a, b) => {  //compares 2 of the events
            return new Date(b.createdAt) - new Date(a.createdAt); //compare created dates if b is negative a was created earlier so should be placed infront of b 
        });
        return sortedEvents.map((event, i) => {  //map gets event from array
            return (
                <Event
                    key={i}
                    event={event}
                    getEvents={getEvents}
                    editEvent={editEvent}
                />
            ); //returns a new Event component where the event property is set to the event we are currently iterating over needs a key as will be returned in an array of components key is current index
        });
    }


    return (
        <div className="home">
            {!eventEditorOpen && (
                <button className="btn-editor-toggle" onClick={() => setEventEditorOpen(true)}>
                    Add Event
                </button>
            )}

            {eventEditorOpen && (
                <EventEditor
                    setEventEditorOpen={setEventEditorOpen}
                    getEvents={getEvents}
                    editEventData={editEventData}
                />
            )}
            {renderEvents()}
        </div>
    );
}

export default Home;
