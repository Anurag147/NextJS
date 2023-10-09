import React from "react";
import Link from "next/link";
import style from './EventItem.module.css';

const EventItem = (props) => {
    const readAbleDate = new Date(props.date).toLocaleDateString('en-US',{
        day:"numeric",
        month:"long",
        year:"numeric"
    });
    const readAbleAddress = props.location.replace(',','\n');
    const exploreLink = `/events/${props.id}`;
        return (
            <li className={style.item}>
                <img src={"/"+props.image} alt={props.title}/>
                <div className={style.content}>
                    <div className={style.summary}>
                        <h2>{props.title}</h2>
                        <div className={style.date}>
                            <time>{readAbleDate}</time>
                        </div>
                        <div className={style.address}>
                            <address>{readAbleAddress}</address>
                        </div>
                    </div>
                    <div className={style.actions}>
                        <Link href={exploreLink}>Explore Events</Link>
                    </div>
                </div>
            </li>
        )
}

export default EventItem;