import React from "react";

import {PageLayout} from "../components/page-layout";
import {useNavigate} from "react-router-dom";

export const CreateEventPage = () => {

    const navigate = useNavigate()

    const handleCancel = async () => {
        navigate("/calendar");
    };

    const handleNext = async () => {
        navigate("/client/add");
    };

    return (<PageLayout>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Create new event
            </h1>
            <div className="content__body">
                <p>Date: 01.02.2024</p>
                <p>Time: 11:00</p>
                <p>Duration: 1 hour</p>
                <button className="button__login" onClick={handleNext}>
                    Next
                </button>
                <p></p>
                <button className="button__cancel" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    </PageLayout>);
}