import { API_URL } from "./inquiry";

export async function getLessons({
  subjectValue,
  unitValue,
  skillValue,
  conceptValue,
}) {
  console.log(subjectValue);
  const request = {
    user_id: 1,
    filter: {
      subjectId: subjectValue,
      unitId: unitValue,
      skillI: skillValue,
      conceptId: conceptValue,
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
