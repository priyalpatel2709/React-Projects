import React, { useState } from "react";
import "../style/SubscriptionForm.css";
import { validateGridDetails } from "../utils/utils";
import { createSubscription } from "../services/subscriptionService";
import { Link } from "react-router-dom";
import DropDown from "../utils/DropDown";

const SubscriptionForm = ({ SelectslotName, UpdateSlotName }) => {
  const [subscriptionName, setSubscriptionName] = useState("");
  const [gridDetails, setGridDetails] = useState([
    {
      date: "",
      startTime: "",
      endTime: "",
    },
  ]);
  const [RestOfDates, setRestofDates] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [error, setError] = useState({
    msg: "",
    showErr: false,
    emptyTime: [],
  });

  // Function to handle changes in grid details
  const handleGridDetailChange = (index, field, value) => {
    setGridDetails((prevGridDetails) =>
      prevGridDetails.map((gridDetail, i) =>
        i === index ? { ...gridDetail, [field]: value } : gridDetail
      )
    );
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateGridDetails(gridDetails);

    if (validationErrors.length > 0) {
      // If there are validation errors, display them and prevent form submission
      console.log("Validation errors:", validationErrors);
      alert(validationErrors);
      return;
    }

    try {
      // Create the subscription object with subscriptionName and gridDetails
      const subscription = {
        name: subscriptionName,
        gridDetails: gridDetails,
        slotname: SelectslotName,
      };

      // Call the createSubscription function to make the API request
      const newSubscription = await createSubscription(subscription);

      // console.log("New Subscription:", newSubscription);
      setGridDetails([]);
      setSubscriptionName("");
      setError({
        msg: "",
        showErr: false,
      });
      if (newSubscription.name) {
        alert(`${newSubscription.name} your bookling is done`);
        setGridDetails([
          {
            date: "",
            startTime: "",
            endTime: "",
          },
        ]);
      } else {
        console.log(newSubscription.result);
        let { message, dates } = newSubscription.result;
        setRestofDates(dates.RestOfDates);
        alert(message);
        setShowPopup(true)
        setGridDetails([
          {
            date: "",
            startTime: "",
            endTime: "",
          },
        ]);
      }
    } catch (error) {
      console.error("Error creating subscription:", error);
      setError((preval) => ({
        ...preval,
        msg: error.response.data.error,
        showErr: true,
        emptyTime: error.response.data.result,
      }));
      setShowPopup(true);
    }
  };

  const restOfDates = RestOfDates?.map((date) => (
    <ui>
      <li>{date}</li>
    </ui>
  ));

  console.log(RestOfDates);

  const BookedTime = error?.emptyTime?.map((time) => (
    <>
      <ui>
        <li>
          startTime:-{time.startTime} - endTime:-{time.endTime}
        </li>
        <br />
      </ui>
    </>
  ));

  return (
    <>
      <div className="subscription-form-container">
        <h2>Subscription Form</h2>
        <DropDown
          SelectslotName={SelectslotName}
          UpdateSlotName={UpdateSlotName}
        />
        <form onSubmit={handleSubmit}>
          {/* Subscription Name Field */}
          <div>
            <label htmlFor="subscriptionName">Subscription Name:</label>
            <input
              type="text"
              id="subscriptionName"
              value={subscriptionName}
              onChange={(e) => setSubscriptionName(e.target.value)}
              required
            />
          </div>
          {error.showErr && <span style={{ color: "red" }}>{error.msg}</span>}
          {/* GridDetail Fields */}
          {gridDetails.map((gridDetail, index) => (
            <div key={index}>
              {/* Date Field */}
              <label htmlFor={`date-${index}`}>Date:</label>
              <input
                type="date"
                id={`date-${index}`}
                value={gridDetail.date}
                onChange={(e) =>
                  handleGridDetailChange(index, "date", e.target.value)
                }
                required
              />

              {/* Start Time Field */}
              <label htmlFor={`startTime-${index}`}>Start Time:</label>
              <input
                type="time"
                id={`startTime-${index}`}
                value={gridDetail.startTime}
                onChange={(e) =>
                  handleGridDetailChange(index, "startTime", e.target.value)
                }
                required
              />

              {/* End Time Field */}
              <label htmlFor={`endTime-${index}`}>End Time:</label>
              <input
                type="time"
                id={`endTime-${index}`}
                value={gridDetail.endTime}
                onChange={(e) =>
                  handleGridDetailChange(index, "endTime", e.target.value)
                }
                required
              />
            </div>
          ))}

          <div>
            {/* Submit Button */}
            <button type="submit">Submit</button>
          </div>
        </form>

        <span>
          Go To <Link to="/list">subscribers List</Link>
        </span>
        <br />
        <span>
          Add <Link to="/booked-time-slots">booked-time-slots</Link>
        </span>
        <br />
      </div>
      <div>
        {RestOfDates?.length > 0 && (
          <div>
            {showPopup && (
              <div className="popup">
                <h3>You can Try on</h3>
                {restOfDates}
                <button onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            )}
          </div>
        )}

        {error?.emptyTime?.length > 0 && (
          <div>
            {showPopup && (
              <div className="popup">
                <h3>Booked Time Slots</h3>
                {BookedTime}
                <button onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SubscriptionForm;
