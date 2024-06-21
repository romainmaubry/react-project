import React, { useState } from "react";

const submitAPI=window.submitAPI;

function BookingForm(props){

    const [date,setDate]=useState("");
    const [guests,setGuests]=useState("");

    const handleSubmit = (e) =>{
    e.preventDefault();
    submitAPI()
    setDate("");
    }

const submitStyle={
    display: 'grid',
    maxWidth: '200px',
    gap: '20px'
}

return(
<form onSubmit={handleSubmit} style={submitStyle}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" name="Date" value={date} onChange={e => setDate(e)} required/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " required>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e)} required/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" required/>
   <button aria-label="On Click" disabled={!date} type="submit">Submit</button>
</form>
)
}

export default BookingForm