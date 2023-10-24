import './EventList.css';
import { Link } from "react-router-dom";
export default function EventList({ events }) {

    return(
        <div className='event-list'>
        <div className='event-list-item'>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event Name</th>
                <th>Venue</th>
                <th>City</th>
                <th>State</th>
                <th>Average Price</th>
                <th>Lowest Price</th>
                <th>Highest Price</th>
                <th>Total Listings</th>
                <th>Event Details</th>
              </tr>
            </thead>
            <tbody>
              {events ? events.map((event, index) => (
                <tr key={index}>
                  <td>{event.datetime_local}</td>
                  <td>{event.short_title}</td>
                  <td>{event.venue.name}</td>
                  <td>{event.venue.city}</td>
                  <td>{event.venue.state}</td>
                  <td>${event.stats.average_price}</td>
                  <td>${event.stats.lowest_price}</td>
                  <td>${event.stats.highest_price}</td>
                  <td>{event.stats.visible_listing_count}</td>
                  <Link to={`/event-details/${index}`}>Details</Link>
                </tr>
              )) : <p>Loading...</p>}
            </tbody>
          </table>
        </div>
      </div>
    );
}