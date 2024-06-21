import BookingForm from './BookingForm.js'
import React, { useReducer } from "react";

const availableTimes=(state,action) => {
   return state;
}

const Main = () => {

    const initializeTimes={times: ["17:00","18:00","19:00","20:00","21:00","22:00" ]}
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