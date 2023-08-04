import React, { useEffect, useState,useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropDown from "../utils/DropDown";

const TimeSlot = ({ UpdateSlotName, SelectslotName }) => {
  const today = new Date().toISOString();
console.log(today);
  const [date, setDate] = useState({
    date: today,
    user: ''
  });

  // const user = "USER"

  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);

  const handleGetBookedTimeSlots = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:4800/booked-time-slots",
        {
          params: {
            date: date.date,
            user: SelectslotName,
          },
        }
      );

      setBookedTimeSlots(response.data);
      setDate(preval=>({
        ...preval,
        user : response.data.user
      }))
      console.log("data", response.data);
    } catch (error) {
      console.error(error);
    }
  });

  // useEffect(()=>{
  //   handleGetBookedTimeSlots()
  // },[])

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(":");
    const parsedHours = parseInt(hours, 10);
    const suffix = parsedHours >= 12 ? "PM" : "AM";
    const formattedHours = parsedHours % 12 || 12;
    return `${formattedHours}:${minutes} ${suffix}`;
  };

  

  return (
    <div className="App-time">
      <DropDown SelectslotName={SelectslotName} UpdateSlotName={UpdateSlotName}/>
      <h1>Check Booked Slot on {date.date}</h1>
      <input
        type="date"
        name="editDate"
        value={date.date || ""}
        onChange={(e) =>
          setDate((preval) => ({ ...preval, date: e.target.value }))
        }
        required
      />

      <button onClick={handleGetBookedTimeSlots}>Get Booked Time Slots</button>
      <ul>
        {bookedTimeSlots?.bookedTimeSlots?.length > 0 ? (
          bookedTimeSlots?.bookedTimeSlots?.map((timeSlot, index) => (
            <li key={index}>
              {index + 1}:- {`  `}
              {`${timeSlot.name}'s appointment at `}
              {convertTo12HourFormat(timeSlot.startTime)} -{" "}
              {convertTo12HourFormat(timeSlot.endTime)} with{" "}
              {bookedTimeSlots.user}
            </li>
          ))
        ) : (
          <>
            <span> No Booking on {date.date} for {date.user}</span>
          </>
        )}
      </ul>
      <span>
        Add <Link to="/">New Subscribers</Link>
      </span>
      <br />
    </div>
  );
};

export default TimeSlot;
