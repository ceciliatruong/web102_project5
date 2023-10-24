import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { useParams } from "react-router-dom";
export default function EventDetails({events}) {
    const routeParams = useParams();
    // console.log(routeParams);
    const event = events[routeParams.id];
    return(
        <div>
            <div className="event-details-container">
                <h1>{event.short_title}</h1>
                <h2>Event Type: {event.type}</h2>
                <h2>Date: {event.datetime_local}</h2>
                <h2>Venue: {event.venue.name}</h2>
                <h3>Address: {event.venue.address}</h3>
                {event.description ? <h5>Event description: {event.description}</h5> : null}
                <Link to={event.url}>Link to Event Page</Link>
            </div>
        </div>
    );
};