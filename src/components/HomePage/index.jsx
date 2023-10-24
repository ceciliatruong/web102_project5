import FilterForm from "../FilterForm";
import EventList from "../EventList";
import DataGraph from "../DataGraph";
export default function HomePage({city, state, userQuery, setCity, setState, setUserQuery, events}) {
    return(
        <div>
            <h1>SeatGeek Events</h1>
            <div className='app-container'>
                <FilterForm
                    city={city}
                    state={state}
                    userQuery={userQuery}
                    setCity={setCity}
                    setState={setState}
                    setUserQuery={setUserQuery}
                />
                <EventList events={events}/>
                <div className="graph-container">
                    <div className="graph-item">
                    <h2>Event Popularity</h2>
                    <DataGraph event={events} dataType="popularity"/>
                    </div>
                    <div className='graph-item'>
                    <h2>Event Score</h2>
                    <DataGraph event={events} dataType="score"/>
                    </div>
                </div>
            </div>
        </div>
    );
}