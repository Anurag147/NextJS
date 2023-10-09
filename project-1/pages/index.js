import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../dummy-data";
import React from "react";

const HomePage = () => {

    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents}></EventList>
        </div>
    )
}

export default HomePage;