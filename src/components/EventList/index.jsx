import Event from "../Event";
import './EventList.css';
export default function EventList({ events }) {

    return(
        <div className='event-list'>
            <div className='event-list-header'>
                <h4 className="event-header-item">Date</h4>
                <h4 className="event-header-item">Event Name</h4>
                <h4 className="event-header-item">Venue</h4>
                <h4 className="event-header-item">City</h4>
                <h4 className="event-header-item">State</h4>
                <h4 className="event-header-item">Average Price</h4>
                <h4 className="event-header-item">Lowest Price</h4>
                <h4 className="event-header-item">Highest Price</h4>
                <h4 className="event-header-item">Total Listings</h4>
            </div>
            {events.map((event) => (
                <Event event={event}/>
            ))}
        </div>
    );
}