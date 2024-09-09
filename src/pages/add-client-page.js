import React from "react";

import {PageLayout} from "../components/page-layout";
import {useNavigate} from "react-router-dom";

export const AddClientPage = () => {

    const navigate = useNavigate()

    const handleNewClient = async () => {
        navigate("/client/create");
    };

    const handleExistClient = async () => {
        navigate("/client/search");
    };

    const handleBack = async () => {
        navigate("/event/create");
    };

    const handleCancel = async () => {
        navigate("/calendar");
    };

    return (<PageLayout>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Add client to event
            </h1>
            <div className="content__body">
                <button className="button__logout" onClick={handleNewClient}>
                    New client
                </button>
                <p></p>
                <button className="button__login" onClick={handleExistClient}>
                    Exist client
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