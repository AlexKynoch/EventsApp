import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./EventEditor.scss";

function EventEditor({ getEvents, setEventEditorOpen, editEventData }) {

    const [editorTitle, setEditorTitle] = useState("");
    const [editorDescription, setEditorDescription] = useState("");
    const [editorLocation, setEditorLocation] = useState("");
    const [editorDay, setEditorDay] = useState("");
    const [editorMonth, setEditorMonth] = useState("");
    const [editorYear, setEditorYear] = useState("");

    useEffect(() => {
        if (editEventData) {
            setEditorTitle(editEventData.title ? editEventData.title : "");
            setEditorDescription(editEventData.description ? editEventData.description : "");
            setEditorLocation(editEventData.location ? editEventData.location : "");
            setEditorDay(editEventData.day ? editEventData.day : "");
            setEditorMonth(editEventData.month ? editEventData.month : "");
            setEditorYear(editEventData.year ? editEventData.year : "");
        }
    }, [editEventData]);


    async function saveEvent(e) {
        e.preventDefault();


        const eventData = {

            //if empty field dont make a field in the database for it db woud make field for empty string but not for undefined

            title: editorTitle ? editorTitle : undefined,
            description: editorDescription ? editorDescription : undefined,
            location: editorLocation ? editorLocation : undefined,
            day: editorDay ? editorDay : undefined,
            month: editorMonth ? editorMonth : undefined,
            year: editorYear ? editorYear : undefined,
        };

        if (!editEventData)
            await Axios.post("http://localhost:5000/event/", eventData);
        else
            await Axios.put(`http://localhost:5000/event/${editEventData._id}`, eventData);

        getEvents();

        closeEditor();
    }
    function closeEditor() {

        setEventEditorOpen(false);
        setEditorTitle("");
        setEditorDescription("");
        setEditorLocation("");
        setEditorDay("");
        setEditorMonth("");
        setEditorYear("");
    }



    return (
        <div className="event-editor">
            <form onSubmit={saveEvent}>
                <label htmlFor="editor-title">Title </label>
                <input
                    id="editor-title"
                    type="text"
                    value={editorTitle}
                    onChange={(e) => setEditorTitle(e.target.value)} />

                <label htmlFor="editor-description">Description </label>
                <textarea
                    id="editor-description"
                    value={editorDescription}
                    onChange={(e) => setEditorDescription(e.target.value)} />

                <label htmlFor="editor-location">Location </label>
                <input
                    id="editor-location"
                    type="text"
                    value={editorLocation}
                    onChange={(e) => setEditorLocation(e.target.value)} />

                <label htmlFor="editor-day">Day </label>
                <input
                    id="editor-day"
                    type="text"
                    value={editorDay}
                    onChange={(e) => setEditorDay(e.target.value)} />

                <label htmlFor="editor-month">Month </label>
                <input
                    id="editor-month"
                    type="text"
                    value={editorMonth}
                    onChange={(e) => setEditorMonth(e.target.value)} />

                <label htmlFor="editor-year">Year </label>
                <input
                    id="editor-year"
                    type="text"
                    value={editorYear}
                    onChange={(e) => setEditorYear(e.target.value)} />

                <button className="btn-save" type="submit">Save</button>
                <button className="btn-cancel" type="button" onClick={closeEditor}>Cancel</button>
            </form>
        </div>
    )
}
export default EventEditor;