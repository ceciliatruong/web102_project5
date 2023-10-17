import { useState } from "react";

export default function FilterForm({ city, state, userQuery, setCity, setState, setUserQuery }) {

  const updateSearch = (e) => {
    e.preventDefault();
    setCity(city);
    setState(state);
    setUserQuery(userQuery);
  }

  return (
    <div>
      <form onSubmit={updateSearch}>
        <label>
          Search: 
          <input
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Search..."
          />
        </label>
        <label>
          City: 
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City...(i.e. San Diego)"
          />
        </label>
        <label>
          State: 
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State...(i.e. CA)"
          />
        </label>
        {/* <button type='submit'>Search</button> */}
      </form>
    </div>
  );
}
