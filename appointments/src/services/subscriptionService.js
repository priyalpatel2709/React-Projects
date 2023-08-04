import axios from "axios";

const BASE_URL = "http://localhost:2709";

// const BASE_URL = "https://appointments-backend.vercel.app";


export const fetchSubscriptions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/subscriptions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    throw error;
  }
};

export const createSubscription = async (subscription) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/subscriptions`,
      subscription
    );
    return response.data;
  } catch (error) {
    console.error("Error creating subscription:", error);
    throw error;
  }
};

export const updateSubscription = async (subscription, id) => {
  try {
    console.log("subscription", subscription);
    const response = await axios.put(
      `${BASE_URL}/update/${subscription._id}/${id}`,
      subscription
    );
    return response.data;
  } catch (error) {
    console.error("Error updating subscription:", error);
    throw error;
  }
};

export const deleteSubscription = async (id) => {
  try {
    let result = await axios.delete(`${BASE_URL}/subscriptions-delete/${id}`);
    return result;
  } catch (error) {
    console.error("Error deleting subscription:", error);
    throw error;
  }
};

export const deleteSubscriptionDate = async (subscriptionId, gridDetailId) => {
  try {
    await axios.delete(
      `${BASE_URL}/subscriptions-delete/${subscriptionId}/${gridDetailId}`
    );
  } catch (error) {
    console.error("Error deleting subscription date:", error);
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-user`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchUserAppointments = async (date, user) => {
  try {
    const response = await axios.get(`${BASE_URL}/booked-time-slots`, {
      params: {
        date: date,
        user: user,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const AddUserInfo = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-user`, user);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const DeleteUSer = async (id) =>{
  try{
    let result = await axios.delete(`${BASE_URL}/delete-user/${id}`);
    return result.data;
  }catch (err){
    throw err;
  }
}


export const updateUser = async (id,update) =>{
  try{
    let result = await axios.put(`${BASE_URL}/update-user/${id}`,update);
    return result.data;
  }catch (err){
    console.log(err);
    throw err;
  }
}