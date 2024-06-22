import BookingForm from './BookingForm.js'
import Hero from './Hero'
import WeekSpecials from './WeekSpecial'
import Testimonials from './Testimonials'
import OurStory from './OurStory'
import React, { useReducer } from "react";
import ConfirmedBooking from './ConfirmedBooking.js'
import { fetchAPI, submitAPI } from './FakeAPI';

const initializeTimes = initialAvailableTimes => 
    [...initialAvailableTimes, ...fetchAPI(new Date())];

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes; 
  };

const Main = () => {

    const [
        availableTimes, 
        dispatchOnDateChange
      ] = useReducer(updateTimes, [], initializeTimes);

      const submitData = formData => {
        const response = submitAPI(formData);
        if (response)  return(
            <ConfirmedBooking/>
            )
      }; 

    return (
        <>
         <Hero />
        <WeekSpecials />
        <Testimonials />
         <OurStory />
            <BookingForm 
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange} 
            submitData={submitData} 
         />
        </>
    )
}
export default Main