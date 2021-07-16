import axios from "axios";
// import { getCurrentUser } from "../auth";
// import { setToken } from "../auth/token"


export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api';

//DATA&TOKEN

export async function fetchData(route) {
  try {
    const response = await fetch(`${BASE_URL}/${route}`);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

// export async function fetchDataToken(route, token) {
//   try {
//     const response = await fetch(`${BASE_URL}/${route}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const result = await response.json();
//     return result;
//   } catch (data) {
//     console.error(error);
//   }
// };

export async function fetchDataToken(route, token) {
  try {
    const response = await fetch(`${URL}${route}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let result;
    try {
      result = await response.json();
    } catch (data2) {
      return [];
    }

    return result;
  } catch (data) {
    console.error(data);
    return [];
  }
}

//AUTH

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const user = await response.json();
    console.log({user})

    return user;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const getMe = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(console.error);
};

//ROUTINES

// const user = getCurrentUser();
// const token = getCurrentUser.token;

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
      return result;
    })
    .catch(console.error)
}

// export async function getRoutinesByUser(userId) {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/users/${userId}/routines`);
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function addRoutine(name, goal, isPublic, token) {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return console.error(error);
  }
};

export async function updateRoutine(routineId, name, goal, isPublic, token) {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return console.error(error);
  }
};

export async function deleteRoutine(routineId, token) {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

//ACTIVITIES

export async function getAllActivities() {
  try {
    const { data } = await axios.get(`${BASE_URL}/activities`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addActivity(routineId, activityId, count, duration) {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        activityId,
        count,
        duration
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export async function createActivity(name, description, token) {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return console.error(error);
  }
};

export async function UpdateActivityCountDuration(
  raId,
  count,
  duration,
  token
) {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${raId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        count,
        duration,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    return console.error(error);
  }
};

export async function deleteActivityFromRoutine(raId, token) {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${raId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("deleteResult:", result);
    return result;
  } catch (error) {
    return console.error(error);
  }
};