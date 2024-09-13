import React from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";
import {DayPilot} from "@daypilot/daypilot-lite-react";
import {apiCreateEvents} from "../services/message.service";

export const ConfirmEventPage = () => {

    const {state} = useLocation();
    const navigate = useNavigate()

    const startDateTime = DayPilot.Date.parse(state.start.value, "yyyy-MM-ddTHH:mm:ss");
    const startDate = startDateTime.toString("yyyy-MM-dd");
    const startTime = startDateTime.toString("HH:mm");
    const day = startDateTime.toString("dddd");
    const endDateTime = DayPilot.Date.parse(state.end.value, "yyyy-MM-ddTHH:mm:ss");

    const client = state.client;

    const event = {
        start: startDateTime, end: endDateTime, text: client.firstName + " " + client.lastName, clientId: client.id
    };

    const createEvents = async (event) => {
        const {data, error} = await apiCreateEvents(event);
        return {data, error};
    }

    const handleCreate = async () => {
        createEvents(event)
            .then(response => {
                let event = response.data;
                console.log("RESPONSE: create event", event);
                return event;
            })
            .then(event => {
                navigate("/calendar");
            })
    };

    const handleBack = async () => {
        let page = state.clientPage;
        if (page === 'CREATE_CLIENT') {
            navigate("/client/create", {
                state: {
                    "start": startDateTime, "end": endDateTime
                }
            });
            return;
        }
        if (page === 'SEARCH_CLIENT') {
            navigate("/client/search", {
                state: {
                    "start": startDateTime, "end": endDateTime
                }
            });
            return;
        }
        navigate("/calendar");
    };

    const handleCancel = async () => {
        navigate("/calendar");
    };

    return (<PageLayout>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Confirm new event creation
            </h1>
            <div className="content__body">
                <p><b>Client</b></p>
                <p>id: {state.client.id}</p>
                <p>Full name: {state.client.firstName} {state.client.lastName}</p>
                <p><b>Event</b></p>
                <p>Date: {startDate}</p>
                <p>Day: {day}</p>
                <p>Time: {startTime}</p>
                <p></p>
                <button className="button__logout" onClick={handleCreate}>
                    Create
                </button>
                <p></p>
                <button className="button__sign-up" onClick={handleBack}>
                    Back
                </button>
                <p></p>
                <button className="button__cancel" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    </PageLayout>);
}