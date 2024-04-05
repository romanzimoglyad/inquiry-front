import { API_URL } from "./inquiry";
import { USER_ID } from "../utils/constants";

export async function createEditLesson(newLesson) {
  try {
    const id = await createOrder(newLesson);
    const res = await storeFiles(newLesson.image, newLesson.files, id);
    return res;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function storeFiles(image, files, id) {
  try {
    const formData = new FormData();
    if (image) {
      formData.append("file", image);
    }
    const uploadImage = {
      userId: USER_ID,
      lessonId: id,
    };

    formData.append("json", JSON.stringify(uploadImage));

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    const res = await fetch(`${API_URL}/lesson/file`, {
      method: "POST",
      body: formData,
    });

    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
    if (!res.ok) throw Error("Failed storing file");

    //   const { data } = await res.json();
    //   console.log("data:", data);

    return res.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createOrder(newLesson) {
  try {
    let lesson = {
      ...newLesson,
      image: null,
      files: null,
      userId: USER_ID,
    };

    const res = await fetch(`${API_URL}/lesson/create`, {
      method: "POST",
      body: JSON.stringify(lesson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { id } = await res.json();
    return id;
  } catch (error) {
    console.error("Error fetching data from first API:", error);
    throw error; // Propagate the error
  }
}

export async function getLesson(id) {
  const request = {
    user_id: USER_ID,
    id: id,
  };

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
