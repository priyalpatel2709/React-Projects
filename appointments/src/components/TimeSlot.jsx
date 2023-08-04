import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import DropDown from "../utils/DropDown";
import { fetchUserAppointments } from "../services/subscriptionService";

const TimeSlot = ({ UpdateSlotName, SelectslotName }) => {
  const timestamp = new Date().toISOString();
  const dateOnly = timestamp.slice(0, 10);

  const [date, setDate] = useState({
    date: dateOnly,
    user: "",
  });

  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);

  const handleGetBookedTimeSlots = async () => {
    UserAppointments();
  };

  const UserAppointments = async () => {
    const UserAppointment = await fetchUserAppointments(
      date.date,
      SelectslotName
    );
    setBookedTimeSlots(UserAppointment);
    setDate((preval) => ({
      ...preval,
      user: UserAppointment.user,
    }));
    console.log("UserAppointment", UserAppointment);
  };

  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(":");
    const parsedHours = parseInt(hours, 10);
    const suffix = parsedHours >= 12 ? "PM" : "AM";
    const formattedHours = parsedHours % 12 || 12;
    return `${formattedHours}:${minutes} ${suffix}`;
  };

  return (
    <div className="App-time">
      <DropDown
        SelectslotName={SelectslotName}
        UpdateSlotName={UpdateSlotName}
      />
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
              {convertTo12HourFormat(timeSlot.endTime)}
            </li>
          ))
        ) : (
          <>
            <span>
              {" "}
              No Booking on {date.date} for {date.user}
            </span>
          </>
        )}
      </ul>
      <span>
        Add <Link to="/">New Subscribers</Link>
      </span>
      <br />
      <span>
        Add <Link to="/Add-user">New user</Link>
      </span>
      <br />
    </div>
  );
};

export default TimeSlot;
