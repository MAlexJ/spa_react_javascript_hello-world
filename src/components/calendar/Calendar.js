import React, {useEffect, useState} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotMonth, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import {apiCreateEvents, apiFindEvents} from "../../services/message.service";
import "./Calendar.css";

const Calendar = () => {

    const [view, setView] = useState("Week");
    const [startDate, setStartDate] = useState(DayPilot.Date.today());
    const [events, setEvents] = useState([]);

    const [dayView, setDayView] = useState();
    const [weekView, setWeekView] = useState();
    const [monthView, setMonthView] = useState();

    const onTimeRangeSelected = async (args) => {
        const dp = args.control;
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        dp.clearSelection();
        if (modal.canceled) {
            return;
        }

        const event = {
            start: args.start, end: args.end, text: modal.result
        };

        const createEvents = async (event) => {
            console.log(event);
            const {data, error} = await apiCreateEvents(event);
        }

        createEvents(event).then(resp => setEvents([...events, event]));
    };

    useEffect(() => {
        let isMounted = true;
        const findEvents = async () => {
            const {data, error} = await apiFindEvents();
            if (!isMounted) {
                return;
            }

            if (data) {
                return Object.keys(data).map(index => {
                    let event = data[index];
                    return {
                        id: event.id,
                        text: event.text,
                        start: DayPilot.Date.parse(event.start, "yyyy-MM-ddTHH:mm:ss"),
                        end: DayPilot.Date.parse(event.end, "yyyy-MM-ddTHH:mm:ss"),
                        backColor: event.backColor,
                        borderColor: event.borderColor
                    }
                })
            }

            if (error) {
                console.error(error)
            }
        };

        findEvents().then(jsonArray => setEvents(jsonArray))

        return () => {
            isMounted = false;
        };

    }, []);

    return (<div className={"container"}>
        <div className={"navigator"}>
            <DayPilotNavigator
                selectMode={view}
                showMonths={2}
                skipMonths={2}
                onTimeRangeSelected={args => setStartDate(args.day)}
                events={events}
            />
        </div>
        <div className={"content"}>
            <div className={"toolbar"}>
                <div className={"toolbar-group"}>
                    <button onClick={() => setView("Day")} className={view === "Day" ? "selected" : ""}>Day</button>
                    <button onClick={() => setView("Week")} className={view === "Week" ? "selected" : ""}>Week
                    </button>
                    <button onClick={() => setView("Month")} className={view === "Month" ? "selected" : ""}>Month
                    </button>
                </div>
                <button onClick={() => setStartDate(DayPilot.Date.today())} className={"standalone"}>Today</button>
            </div>

            <DayPilotCalendar
                viewType={"Day"}
                eventDeleteHandling={"Update"}
                startDate={startDate}
                timeFormat={"Clock24Hours"}
                events={events}
                visible={view === "Day"}
                durationBarVisible={false}
                onTimeRangeSelected={onTimeRangeSelected}
                controlRef={setDayView}
            />
            <DayPilotCalendar
                viewType={"Week"}
                eventDeleteHandling={"Update"}
                weekStarts={1}
                timeFormat={"Clock24Hours"}
                startDate={startDate}
                events={events}
                visible={view === "Week"}
                durationBarVisible={false}
                onTimeRangeSelected={onTimeRangeSelected}
                controlRef={setWeekView}
            />
            <DayPilotMonth
                startDate={startDate}
                eventDeleteHandling={"Update"}
                weekStarts={1}
                events={events}
                visible={view === "Month"}
                eventBarVisible={false}
                onTimeRangeSelected={onTimeRangeSelected}
                controlRef={setMonthView}
            />
        </div>
    </div>);
}

export default Calendar;
