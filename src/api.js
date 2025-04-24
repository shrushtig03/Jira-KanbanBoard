
import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://49.36.35.182:3306'; // Update this to your actual public URL if needed

// Fetch data from API (for example, fetching tickets)
export const fetchData = async () => {
  try {
    const response = await axios.get($,{BASE_URL}/tickets);
    return response.data; // Returning the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return empty array in case of error
  }
};

// You can add other API functions here
export const postData = async (data) => {
  try {
    const response = await axios.post($,{BASE_URL}/tickets, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    return null;
  }
};

// Example of deleting a ticket by ID
export const deleteData = async (id) => {
  try {
    await axios.delete($,{BASE_URL}/tickets/$,{id});
    return id; // Return the ID for successful deletion
  } catch (error) {
    console.error('Error deleting data:', error);
    return null;
  }
};