import BookingForm from './BookingForm.js'
import React, { useReducer } from "react";
import ConfirmedBooking from './ConfirmedBooking.js'

const submitAPI=window.submitAPI;
const fetchAPI=window.fetchAPI;

const availableTimes=(state,action) => {
   return state;
}

 function submitForm(form){
   if(submitAPI(form)){
    return(
    <ConfirmedBooking/>
    )
   }
}

const Main = () => {

    const initializeTimes=(date)=>{
        times: fetchAPI(date)
    }
    const updateTimes=(availableTimes) => {  
        return state
    }
    const [state,dispatch]=useReducer(availableTimes,initializeTimes,updateTimes);

    return (
        <header>
            <BookingForm availableTimes={()=>dispatch({})} />
        </header>
    )
}
export default Main