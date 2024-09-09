import React from "react";

import {PageLayout} from "../components/page-layout";
import {useNavigate} from "react-router-dom";

export const SearchClientPage = () => {

    const navigate = useNavigate()

    const handleNext = async () => {
        navigate("/event/confirm", {state: {"clientPage": "SEARCH_CLIENT"}});
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