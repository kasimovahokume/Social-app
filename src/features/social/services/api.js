import axios from 'axios';


const BASE_URL = "https://blog-api-t6u0.onrender.com/posts";

export const getPosts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("API xətası:", error);
    return [];
  }
};