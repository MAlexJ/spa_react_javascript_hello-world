import React from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";
import {DayPilot} from "@daypilot/daypilot-lite-react";

export const CreateClientPage = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const startDateTime = DayPilot.Date.parse(state.start.value, "yyyy-MM-ddTHH:mm:ss");
    const endDateTime = DayPilot.Date.parse(state.end.value, "yyyy-MM-ddTHH:mm:ss");

    const handleNext = async () => {
        navigate("/event/confirm", {
            state: {
                "clientPage": "CREATE_CLIENT", "start": startDateTime, "end": endDateTime
            }
        });
    };

    const handleBack = async () => {
        navigate("/event/create", {
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
                Add a new client
            </h1>
            <div className="content__body">
                First name: <input name="fName" type="text"/>
                <p></p>
                Second name: <input name="sName" type="text"/>
                <p></p>
                Phone number: <input name="info" type="text"/>
                <p></p>
                <button className="button__login" onClick={handleNext}>
                    Next
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