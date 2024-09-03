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
            {/*    <p id="page-description">*/}
            {/*<span>*/}
            {/*  This page with Calendar*/}
            {/*</span>*/}
            {/*        <span>*/}
            {/*  <strong>Any visitor can access this page.</strong>*/}
            {/*</span>*/}
            {/*    </p>*/}

                <Calendar />
                {/*/!*<CodeSnippet title="Public Message" />*!/*/}
                {/*<Calendar*/}
                {/*    localizer={localizer}*/}
                {/*    // events={myEventsList}*/}
                {/*    startAccessor="start"*/}
                {/*    endAccessor="end"*/}
                {/*    style={{height: 500}}*/}
                {/*/>*/}
            </div>
        </div>
    </PageLayout>);
};