import React from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";

export const ConfirmEventPage = () => {

    const navigate = useNavigate()
    const location = useLocation();

    const handleCreate = async () => {
        navigate("/calendar");
    };

    const handleBack = async () => {
        let page = location.state.clientPage;
        if (page === 'CREATE_CLIENT') {
            navigate("/client/create");
            return;
        }
        if (page === 'SEARCH_CLIENT') {
            navigate("/client/search");
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
                <p>Date: 01.02.2024</p>
                <p>Time: 11:00</p>
                <p>Duration: 1 hour</p>

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