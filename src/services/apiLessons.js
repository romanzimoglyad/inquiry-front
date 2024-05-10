import { API_URL } from "./inquiry";
import { PAGE_SIZE, USER_ID } from "../utils/constants";

export async function createLesson({ request: newLesson, token }) {
  try {
    let lesson = {
      ...newLesson,
      userId: USER_ID,
    };

    const res1 = await fetch(`${API_URL}/lesson/create`, {
      method: "POST",
      body: JSON.stringify(lesson),
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res1.ok) throw Error("Failed creating lesson");

    const { id } = await res1.json();
    const res = await updateFiles(
      newLesson?.image,
      newLesson?.oldFiles,
      newLesson?.files,
      id,
      token
    );
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function updateLesson({ newLessonData, id, token }) {
  try {
    const res1 = await updateOnlyLesson(newLessonData, id, token);
    await updateFiles(
      newLessonData.image,
      newLessonData.oldFiles,
      newLessonData.files,
      id,
      token
    );
    return res1;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// async function storeFiles(image, files, id) {
//   try {
//     const formData = new FormData();
//     if (image) {
//       formData.append("file", image);
//     }
//     const uploadImage = {
//       userId: USER_ID,
//       lessonId: id,
//     };

//     formData.append("json", JSON.stringify(uploadImage));

//     for (let i = 0; i < files.length; i++) {
//       formData.append("files", files[i]);
//     }

//     const res = await fetch(`${API_URL}/lesson/file`, {
//       method: "POST",
//       body: formData,
//     });

//     // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
//     if (!res.ok) throw Error("Failed storing file");

//     //   const { data } = await res.json();
//     //   console.log("data:", data);

//     return res.json();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

async function updateFiles(image, oldFiles, files, id, token) {
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

    if (files) {
      console.log(1);
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }

    if (oldFiles) {
      console.log(2);
      for (let i = 0; i < oldFiles.length; i++) {
        formData.append("oldFiles", oldFiles[i].name);
      }
    }
    const res = await fetch(`${API_URL}/lesson/file`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `${token}`,
      },
    });

    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
    if (!res.ok) throw Error("Failed storing file");

    //   const { data } = await res.json();
    //   console.log("data:", data);

    return;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Propagate the error
  }
}

async function updateOnlyLesson(newLesson, id, token) {
  console.log(newLesson);
  try {
    let lesson = {
      id: id,
      ...newLesson,
      userId: USER_ID,
    };

    const res = await fetch(`${API_URL}/lesson/update`, {
      method: "POST",
      body: JSON.stringify(lesson),
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error("Failed update lesson");
    const { resp } = await res.json();
    return resp;
  } catch (error) {
    console.error("Error fetching data from first API:", error);
    throw error; // Propagate the error
  }
}

export async function deleteLesson({ id, token }) {
  console.log(token);
  const request = {
    user_id: USER_ID,
    id: id,
  };

  const res = await fetch(`${API_URL}/lesson/delete`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting lesson");
}

export async function getLesson(id) {
  if (!id) {
    console.log("no id");
    return null;
  }
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
  gradeValue,
  search,
  page,
}) {
  const request = {
    user_id: USER_ID,
    filter: {
      subjectId: subjectValue,
      unitId: unitValue,
      skillId: skillValue,
      conceptId: conceptValue,
      gradeId: gradeValue,
      searchText: search,
    },
  };
  if (page) {
    request.page = { page: page, size: PAGE_SIZE };
  }

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
