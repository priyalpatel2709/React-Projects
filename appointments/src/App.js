import "./App.css";
import SubscriptionForm from "./components/SubscriptionForm";
import SubscriptionList from "./components/SubscriptionList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSlot from './components/TimeSlot'
import { useState,useEffect } from "react";
import { fetchUser } from "./services/subscriptionService";
import AdduserInfo from "./utils/AdduserInfo";

function App() {
  const [slotName,setSlotName] = useState('')

  const UpdateSlot = (e)=>{
    setSlotName(e.target.value)
  }

  useEffect(() => {
    // Fetch data from the API and set the initial value of slotName
    const fetchInitialSlotName = async () => {
      try {
        let users = await fetchUser();
        if (users && users.length > 0) {
          setSlotName(users[0].name); // Set the initial value to the first user's name
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchInitialSlotName();
  }, []);

  console.log(slotName);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriptionForm SelectslotName={slotName}  UpdateSlotName={UpdateSlot}/>}/>
        <Route path="/List" element={<SubscriptionList />}/>
        <Route path="/booked-time-slots" element={ <TimeSlot SelectslotName={slotName} UpdateSlotName={UpdateSlot}/>}/>
        <Route path="/Add-user" element={ <AdduserInfo/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
