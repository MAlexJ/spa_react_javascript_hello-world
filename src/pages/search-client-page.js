import React from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";
import {DayPilot} from "@daypilot/daypilot-lite-react";

export const SearchClientPage = () => {

    const navigate = useNavigate()
    const {state} = useLocation();

    const startDateTime = DayPilot.Date.parse(state.start.value, "yyyy-MM-ddTHH:mm:ss");
    const endDateTime = DayPilot.Date.parse(state.end.value, "yyyy-MM-ddTHH:mm:ss");

    const handleNext = async () => {
        navigate("/event/confirm", {
            state: {"clientPage": "SEARCH_CLIENT", "start": startDateTime, "end": endDateTime}
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
                Search client
            </h1>
            <div className="content__body">
                <input name="search" type="text"/>
                <button>
                    Search
                </button>
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
                <button className="button__logout" onClick={handleNext}>
                    Next
                </button>
                <p></p>
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