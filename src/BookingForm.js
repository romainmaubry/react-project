import React, { useState } from "react";

function BookingForm({
   availableTimes,
   dispatchOnDateChange,
   submitData
 }){

   const minimumNumberOfGuests = 1;
   const maximumNumberOfGuests = 10;
   const occasions = ['Birthday', 'Anniversary'];

   const defaultTime = availableTimes[0];
   const [date,setDate]=useState("");
    const [time, setTime] = useState(defaultTime);
    const [
      numberOfGuests, 
      setNumberGuests
    ] = useState(minimumNumberOfGuests);
    const [occasion, setOccasion] = useState(occasions[0]);
  
    const handleDateChange = e => {
      setDate(e.target.value);
      dispatchOnDateChange(e.target.value);
    };
  
    const handleTimeChange = e => setTime(e.target.value);

    const handleSubmit = (e) =>{
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
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
   <input type="date" id="res-date" name="Date" value={date} onChange={handleDateChange} required/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time "  onChange={handleTimeChange}required>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" id="guests" value={numberOfGuests}
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests}  onChange={e => setNumberGuests(e.target.value)} required/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
      onChange={e => setOccasion(e.target.value)}
   </select>
   <button type="submit" required>  Make your reservation</button>
</form>
)
}

export default BookingForm