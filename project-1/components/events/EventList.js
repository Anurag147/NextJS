import React from "react";
import EventItem from "./eventItem";
import style from './EventList.module.css';

const EventList = (props) => {
    return (
        <ul className={style.list}>
            {props.items.map((item)=>{
                return (
                    <EventItem key={item.id} image={item.image} title={item.title} location = {item.location} id={item.id} date={item.date}></EventItem>
                )
            })}
        </ul>
    )
}

export default EventList;