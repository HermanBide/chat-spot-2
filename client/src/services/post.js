import axios from "axios"

const apiURL = process.env.NODE_ENV === "development" ? "http://localhost:3002" : "https://chat-app-osos.herokuapp.com"

export const getPosts = async () => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/planner-entries`, config);
            return response.data;
        }
        return[];
    } catch (error) {
        console.error(error.message);
    }
}

export const getPostById = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.get(`${apiURL}/api/planner-entries/${id}`, config);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}


export const createPost = async (newPlannerEntry) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.post(`${apiURL}/api/planner-entries`, newPlannerEntry, config);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export const updatePost = async (id, planner) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const config = buildHeaders(token);
        const response = await axios.put(
          `${apiURL}/api/planner-entries/${id}`,
          planner,
          config
        );
        return response.data;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

export const destoryPost = async (id) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const config = buildHeaders(token);
            const response = await axios.delete(`${apiURL}/api/planner-entries/${id}`, config);
            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}