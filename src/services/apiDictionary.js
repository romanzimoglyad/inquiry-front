import { API_URL } from "./inquiry";

export async function getDictionary(request) {
  const res = await fetch(`${API_URL}/dictionary/list`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting subjects");

  //   const { data } = await res.json();
  //   console.log("data:", data);

  return res.json();
}
