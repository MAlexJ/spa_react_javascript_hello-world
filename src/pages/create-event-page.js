import React from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";
import {DayPilot} from "@daypilot/daypilot-lite-react";

export const CreateEventPage = () => {

    const navigate = useNavigate()
    const {state} = useLocation();

    const startDateTime = DayPilot.Date.parse(state.start.value, "yyyy-MM-ddTHH:mm:ss");
    const startDate = startDateTime.toString("yyyy-MM-dd");
    const startTime = startDateTime.toString("HH:mm");
    const day = startDateTime.toString("dddd");

    const endDateTime = DayPilot.Date.parse(state.end.value, "yyyy-MM-ddTHH:mm:ss");
    const endTime = endDateTime.toString("HH:mm");


    const handleNewClient = async () => {
        navigate("/client/create", {
            state: {
                "start": startDateTime, "end": endDateTime
            }
        });
    };

    const handleExistClient = async () => {
        navigate("/client/search", {
            state: {
                "start": startDateTime, "end": endDateTime
            }
        });
    };

    const handleCancel = async () => {
        navigate("/calendar");
    };

    return (<PageLayout>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Create new event
            </h1>
            <div className="content__body">
                <p>Date: {startDate}</p>
                <p>day: {day}</p>
                <p>start: {startTime}</p>
                <p>end: {endTime}</p>
                <p></p>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Second name</th>
                        <th>Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <th>Cat</th>
                        <th>Animal</th>
                        <th>Wtf!!!</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Dog</th>
                        <th>Hot dog</th>
                        <th>Wtf!!!</th>
                    </tr>
                    </tbody>
                </table>
                <p></p>
                <button className="button__login" onClick={handleExistClient}>
                    Exist client
                </button>
                <p></p>
                <button className="button__logout" onClick={handleNewClient}>
                    New client
                </button>
                <p></p>
                <button className="button__cancel" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    </PageLayout>);
}