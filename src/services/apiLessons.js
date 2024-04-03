import { useEffect } from "react";
import { API_URL } from "./inquiry";
import { USER_ID } from "../utils/constants";

export async function createEditLesson(newLesson, id) {
  let lesson = { ...newLesson, userId: USER_ID };
  console.log(lesson);
  const res = await fetch(`${API_URL}/lesson/create`, {
    method: "POST",
    body: JSON.stringify(lesson),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed creating lesson");

  //   const { data } = await res.json();
  //   console.log("data:", data);

  return res.json();
}

export async function getLesson(id) {
  const request = {
    user_id: USER_ID,
    id: id,
  };
  console.log(request);
  const res = await fetch(`${API_URL}/lesson`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting lesson");

  //   const { data } = await res.json();
  //   console.log("data:", data);

  return res.json();
}

export async function getLessons({
  subjectValue,
  unitValue,
  skillValue,
  conceptValue,
  search,
}) {
  const request = {
    user_id: USER_ID,
    filter: {
      subjectId: subjectValue,
      unitId: unitValue,
      skillId: skillValue,
      conceptId: conceptValue,
      searchText: search,
    },
  };

  const res = await fetch(`${API_URL}/lesson/list`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting lessons");

  //   const { data } = await res.json();
  //   console.log("data:", data);

  return res.json();
}

// export async function createOrder(newOrder) {
//     try {
//       const res = await fetch(`${API_URL}/order`, {
//         method: "POST",
//         body: JSON.stringify(newOrder),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) throw Error();
//       const { data } = await res.json();
//       return data;
//     } catch {
//       throw Error("Failed creating your order");
//     }
//   }
