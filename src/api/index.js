import axios from "axios";
import { getCurrentUser } from "../auth";
import { setToken } from "../auth/token"


export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api';
const user = getCurrentUser();
const token = currentUser.token;

// export async function getAllRoutines() {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/routines`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function getAllRoutines() {
  return fetch(`${BASE_URL}/routines`, {
    headers: {
      "Content-Type": "application.json"
    },
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error)
}

export async function getAllActivities() {
  try {
    const { data } = await axios.get(`${BASE_URL}/activities`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function registerUser(userObject) {
//     try {
//         return axios.post(`${BASE_URL}/users/register`, userObject, {
//             validateStatus: function (status) {
//                 return (status >= 200 && status < 300) || status === 401;
//             },
//         });
//     } catch (error) {
//         throw error;
//     }
// }

export const loginUser = async (username, password) => {
  return await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((d) => d.json())
    .then((r) => {
      const { user, token } = r;
      setToken(token);
      return user;
    });
};

// export async function registerUser(userObject) {
//   const {username, password} = userObject
//   try {
//     return await axios.post(`${BASE_URL}/users/register`, userObject, {
//       body: JSON.stringify({
//         username,
//         password
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       },
//     }).then((d) => d.json())
//       .then((r) => {
//         const { user, token } = r;
//         setToken(token);
//         return user;
//       })
//   } catch (error) {
//     throw error;
//   }
// };

export const registerUser = (username, password) => {
  return fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then((d) => d.json())
  .then((r) => {
    const {user, token} = r;
    setToken(token);
    return user;
  });
};

export const userMe = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    body: {
      id,
      username
    },
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}

export async function getRoutinesByUser(userId) {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/${userId}/routines`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}