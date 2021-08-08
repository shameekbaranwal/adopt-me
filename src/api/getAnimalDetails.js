import retrieveJWT from "./retrieveJWT.js";
import axios from "axios";

async function getAnimalDetails(id) {
  try {
    const jwt = await retrieveJWT();

    const { data } = await axios.get(`${process.env.API_URL}/animals/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return [data.animal, true];
  } catch (e) {
    return [[], false];
  }
}

export default getAnimalDetails;
