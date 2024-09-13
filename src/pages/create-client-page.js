import React, {useState} from "react";

import {PageLayout} from "../components/page-layout";
import {useLocation, useNavigate} from "react-router-dom";
import {DayPilot} from "@daypilot/daypilot-lite-react";
import {apiCreateClients} from "../services/message.service";

export const CreateClientPage = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const startDateTime = DayPilot.Date.parse(state.start.value, "yyyy-MM-ddTHH:mm:ss");
    const endDateTime = DayPilot.Date.parse(state.end.value, "yyyy-MM-ddTHH:mm:ss");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [info, setInfo] = useState("");

    const client = {
        firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, info: info
    };

    const createClients = async (client) => {
        const {data, error} = await apiCreateClients(client);
        return {data, error};
    }

    const handleNext = async () => {
        if (!firstName) {
            alert("First name is empty!")
            return;
        }
        if (!lastName) {
            alert("Second name is empty!")
            return;
        }

        createClients(client)
            .then(response => {
                let persistClient = response.data;
                console.log("RESPONSE: create client", persistClient);
                return persistClient
            })
            .then(persistClient => {
                navigate("/event/confirm", {
                    state: {
                        "clientPage": "CREATE_CLIENT",
                        "start": startDateTime,
                        "end": endDateTime,
                        "client": persistClient
                    }
                });
            })
    };

    const handleChange = (e, name) => {
        if (name === "firstName") {
            setFirstName(e.target.value)
        }
        if (name === "lastName") {
            setLastName(e.target.value)
        }
        if (name === "phoneNumber") {
            setPhoneNumber(e.target.value)
        }
        if (name === "info") {
            setInfo(e.target.value)
        }
    }

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
                First name:
                <input
                    value={firstName}
                    onChange={e => handleChange(e, "firstName")}
                    type="text"/>
                <p></p>
                Second name:
                <input
                    value={lastName}
                    onChange={e => handleChange(e, "lastName")}
                    type="text"/>
                <p></p>
                Phone number:
                <input
                    value={phoneNumber}
                    onChange={e => handleChange(e, "phoneNumber")}
                    type="phone"/>
                <p></p>
                Additional info:
                <input
                    value={info}
                    onChange={e => handleChange(e, "info")}
                    type="text"/>
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