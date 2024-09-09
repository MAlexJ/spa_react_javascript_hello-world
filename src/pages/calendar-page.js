import React from "react";

import {PageLayout} from "../components/page-layout";
import Calendar from "../components/calendar/Calendar";

export const CalendarPage = () => {
    return (<PageLayout>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
                Calendar Page
            </h1>
            <div className="content__body">
                <Calendar/>
            </div>
        </div>
    </PageLayout>);
};