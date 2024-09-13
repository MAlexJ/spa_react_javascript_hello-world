import React, {useEffect, useState} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotMonth, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import {apiDeleteEvents, apiFindEvents, apiPartialUpdate} from "../../services/message.service";
import "./Calendar.css";
import {useNavigate} from "react-router-dom";

const Calendar = () => {

    const navigate = useNavigate()
    const [view, setView] = useState("Week");
    const [startDate, setStartDate] = useState(DayPilot.Date.today());
    const [events, setEvents] = useState([]);

    const [dayView, setDayView] = useState();
    const [weekView, setWeekView] = useState();
    const [monthView, setMonthView] = useState();

    const onTimeRangeSelected = async (args) => {
        const dp = args.control;

        dp.clearSelection();

        navigate("/event/create", {
            state: {
                "start": args.start, "end": DayPilot.Date.parse(args.end, "yyyy-MM-ddTHH:mm:ss").addMinutes(30)
            }
        });

        // modal.then(modalArgs => {
        //     console.log("modalArgs", modalArgs);
        //     console.log("modalArgs canceled", modalArgs.canceled);
        //     if (modalArgs.canceled) {
        //         return;
        //     }
        //
        //     // navigate("/event/create");
        //     // todo: event or   modalArgs.result
        //     // return createEvents(event);
        // })
        //     .then(response => {
        //         let event = response.data;
        //         console.log("RESPONSE: create event", event);
        //         let mapJsonToDayPilotEvent = (json) => {
        //             const dateFormat: string = "yyyy-MM-ddTHH:mm:ss";
        //             let map: Map = new Map(Object.entries(json));
        //             let id: number = map.get('id');
        //             let text: string = map.get('text');
        //             let start: string = map.get('start');
        //             let end: string = map.get('end');
        //             return {
        //                 id: id,
        //                 text: text,
        //                 start: DayPilot.Date.parse(start, dateFormat),
        //                 end: DayPilot.Date.parse(end, dateFormat)
        //             }
        //         };
        //         return mapJsonToDayPilotEvent(event);
        //     }).then(mappedEvent => {
        //     setEvents([...events, mappedEvent])
        // })


        // const event = {
        //     start: args.start, end: DayPilot.Date.parse(args.end, "yyyy-MM-ddTHH:mm:ss").addMinutes(30), text: args.text
        // };
        //
        // if (event.text === '') {
        //     return;
        // }

        // const createEvents = async (event) => {
        //     const {data, error} = await apiCreateEvents(event);
        //     return {data, error};
        // }


    };

    const onEventMoveOrResizeHandler = async (args) => {
        let id: number = args.e.data.id;
        let startDate: string = args.newStart.value;
        let endDate: string = args.newEnd.value;

        let mapDateToJson = (startDate, endDate) => {
            return {
                start: startDate, end: endDate
            }
        };

        const partialUpdate = async (id, partialEventUpdate) => {
            const {data, error} = await apiPartialUpdate(id, partialEventUpdate);
            return {data, error};
        }

        partialUpdate(id, mapDateToJson(startDate, endDate)).then(resp => {
            console.log("RESPONSE: Path event by id", resp.data);
        })
    }

    const onEventDeleteHandler = async (args) => {
        let id: number = args.e.data.id;
        console.log("Delete event by id", id);


        const deleteEvents = async (id) => {
            const {data, error} = await apiDeleteEvents(id);
            return {data, error};
        };

        deleteEvents(id).then((resp) => {
            console.log("RESPONSE: Delete event by id", resp.data);
        });

    }

    const okTextHandler = async (args) => {
        console.log("okTextHandler", args);
    }

    const onShowHandler = async (args) => {
        console.log("onShowHandler", args);
    }

    const onCloseHandler = async (args) => {
        console.log("onCloseHandler", args);
    }

    const onEventClickHandler = async (args) => {
        console.log("onEventClick", args);
    }

    const onEventRightClickHandler = async (args) => {
        console.log("onEventRightClickHandler", args);
    }

    useEffect(() => {
        const findEvents = async () => {
            const {data, error} = await apiFindEvents();

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
    }, []);

    return (<div className={"container"}>
        <div className={"navigator"}>
            <DayPilotNavigator
                locale={'ru-ru'}
                selectMode={view}
                weekStarts={1}
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
                locale={'ru-ru'}
                eventDeleteHandling={"Update"}
                headerDateFormat={"dddd dd.MM.yyyy"}
                startDate={startDate}
                timeFormat={"Clock24Hours"}
                onEventMove={onEventMoveOrResizeHandler}
                onEventDelete={onEventDeleteHandler}
                onEventResize={onEventMoveOrResizeHandler}
                events={events}
                visible={view === "Day"}
                durationBarVisible={false}
                onTimeRangeSelected={onTimeRangeSelected}
                controlRef={setDayView}
            />
            <DayPilotCalendar
                viewType={"Week"}
                locale={'ru-ru'}
                eventDeleteHandling={"Update"}
                // header customization: https://doc.daypilot.org/calendar/column-header-customization/
                headerDateFormat={"dd.MM.yyyy"}
                headerHeight={50}
                headerTextWrappingEnabled={true}
                onEventMove={onEventMoveOrResizeHandler}
                onEventDelete={onEventDeleteHandler}
                onEventResize={onEventMoveOrResizeHandler}
                onEventClick={onEventClickHandler}
                onEventRightClick={onEventRightClickHandler}
                weekStarts={1}

                // showToolTip={true}
                days={1}
                // durationBarVisible={true}
                timeFormat={"Clock24Hours"}
                startDate={startDate}
                events={events}
                visible={view === "Week"}
                onTimeRangeSelected={onTimeRangeSelected}
                controlRef={setWeekView}
            />
            <DayPilotMonth
                startDate={startDate}
                eventDeleteHandling={"Update"}
                locale={'ru-ru'}
                onEventMove={onEventMoveOrResizeHandler}
                onEventDelete={onEventDeleteHandler}
                onEventResize={onEventMoveOrResizeHandler}
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
