import retrieveJWT from "./retrieveJWT.js";
import axios from "axios";

async function getAnimalsList() {
  try {
    const jwt = await retrieveJWT();

    const { data } = await axios.get(`${process.env.API_URL}/types/`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const animals = data.types.map((type) => ({
      label: type.name,
      value: type._links.breeds.href.split("/")[3],
    }));

    return [animals, true];
  } catch (e) {
    return [[], false];
  }
}

export default getAnimalsList;
