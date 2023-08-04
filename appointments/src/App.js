import "./App.css";
import SubscriptionForm from "./components/SubscriptionForm";
import SubscriptionList from "./components/SubscriptionList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSlot from './components/TimeSlot'
import { useState } from "react";

function App() {
  const [slotName,setSlotName] = useState('USER')

  const UpdateSlot = (e)=>{
    setSlotName(e.target.value)
  }

  console.log(slotName);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriptionForm SelectslotName={slotName}  UpdateSlotName={UpdateSlot}/>}/>
        <Route path="/List" element={<SubscriptionList />}/>
        <Route path="/booked-time-slots" element={ <TimeSlot SelectslotName={slotName} UpdateSlotName={UpdateSlot}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
