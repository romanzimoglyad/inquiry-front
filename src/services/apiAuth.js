import { API_URL } from "./inquiry";

export async function login(request) {
  const req = { login: request.email, password: request.password };

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(req),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed to login");

  //   const { data } = await res.json();
  //   console.log("data:", data);

  return res.json();
}
