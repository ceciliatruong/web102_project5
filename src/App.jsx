import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import EventDetails from './components/EventDetails';
import NoPage from './components/NoPage';
function App() {
  const [events, setEvents] = useState([]);
  const client_id = "Mzc1NjE5MTR8MTY5NzQ5MjY1MC43NjY4OTM5";
  const app_secret = "9ca70d46d727c7eb2bd11b71b0e238657cae48fd58f99209dc3a14f8dbbe67a2";
  const [city, setCity] = useState('San Diego');
  const [state, setState] = useState('CA');
  const [userQuery, setUserQuery] = useState('');
  useEffect(() => {
    const api_url = "https://api.seatgeek.com/2/events";
  
    const params = new URLSearchParams({
      client_id: client_id,
      client_secret: app_secret,
      'q': userQuery

    });
    if(state.trim() !== '') {
      params.append('venue.state', state);
    }
    if(city.trim()!== '') {
      params.append('venue.city', city);
    }
  
    const apiUrlWithParams = `${api_url}?${params.toString()}`;
    console.log(apiUrlWithParams); 
  
    fetch(apiUrlWithParams)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data.events);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [city, state, userQuery]);
  
  console.log(events);
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <HomePage city={city} state={state} userQuery={userQuery} setCity={setCity} setState={setState} setUserQuery={setUserQuery} events={events}/> */}
        <Route path="/" element={<HomePage city={city} state={state} userQuery={userQuery} setCity={setCity} setState={setState} setUserQuery={setUserQuery} events={events}/>}/>
        <Route path="/event-details/:id" element={<EventDetails events={events}/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </div>
  );
};

export default App
