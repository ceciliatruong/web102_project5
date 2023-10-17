export default function Event({ event }) {
    return(
        <div className="event">
            <h4 className="event-item">{event.datetime_local}</h4>
            <h4 className="event-item">{event.short_title}</h4>
            <h4 className="event-item">{event.venue.name}</h4>
            <h4 className="event-item">{event.venue.city}</h4>
            <h4 className="event-item">{event.venue.state}</h4>
            <h4 className="event-item">${event.stats.average_price}</h4>
            <h4 className="event-item">${event.stats.lowest_price}</h4>
            <h4 className="event-item">${event.stats.highest_price}</h4>
            <h4 className="event-item">{event.stats.visible_listing_count}</h4>
        </div>
    );
}