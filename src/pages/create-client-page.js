import React from "react";

import {PageLayout} from "../components/page-layout";
import {useNavigate} from "react-router-dom";

export const CreateClientPage = () => {

    const navigate = useNavigate()

    const handleNext = async () => {
        navigate("/event/confirm", {state: {"clientPage": "CREATE_CLIENT"}});
    };

    const handleBack = async () => {
        navigate("/client/add");
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
                Info: <input name="info" type="text"/>
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