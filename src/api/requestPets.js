import retrieveJWT from "./retrieveJWT.js";
import axios from "axios";

const requestPets = async (animal, breed, location, page = 1) => {
  try {
    const jwt = await retrieveJWT();

    const url = new URL(process.env.API_URL + "/animals");
    if (animal) url.searchParams.set("type", animal);
    if (breed) url.searchParams.set("breed", breed);
    if (location) url.searchParams.set("location", location);
    url.searchParams.set("page", page);
    url.searchParams.set("limit", 20);

    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${jwt}` },
    });

    const data = res.data;

    return [data, true];
  } catch (e) {
    console.error("Error while accessing pets", e);
    return [[], false];
  }
};

export default requestPets;
