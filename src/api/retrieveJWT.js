import axios from "axios";

export default async function retrieveJWT() {
  const token = localStorage.getItem("token");
  const createdAt = localStorage.getItem("createdAt");
  if (!token || Date.now() - createdAt >= 1 * 60 * 60 * 1000) {
    //if there is no JWT or if JWT was created more than one hour ago, retrieve a new JWT.
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    });

    const { data } = await axios.post(
      process.env.API_URL + "/oauth2/token",
      body
    );

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("createdAt", Date.now());

    return data.access_token;
  } else {
    return token;
  }
}
