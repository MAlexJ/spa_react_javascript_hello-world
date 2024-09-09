import React from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";
import {DayPilot} from "@daypilot/daypilot-lite-react";

export const ConfirmEventPage = () => {
    const navigate = useNavigate()
    const {state} = useLocation();
    const startDateTime = DayPilot.Date.parse(state.start.value, "yyyy-MM-ddTHH:mm:ss");
    const startDate = startDateTime.toString("yyyy-MM-dd");
    const startTime = startDateTime.toString("HH:mm");
    const day = startDateTime.toString("dddd");
    const endDateTime = DayPilot.Date.parse(state.end.value, "yyyy-MM-ddTHH:mm:ss");

    const handleCreate = async () => {
        navigate("/calendar");
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
                <p>Client: Cat Animal</p>
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