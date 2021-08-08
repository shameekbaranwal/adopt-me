import axios from "axios";

import retrieveJWT from "./retrieveJWT.js";

async function getBreedsList(animal) {
  try {
    const jwt = await retrieveJWT();

    const { data } = await axios.get(
      `${process.env.API_URL}/types/${animal}/breeds`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const breedsList = data.breeds.map((breed) => {
      const { name } = breed;
      const words = name.split(" ");
      const filteredWords = words.filter((word) => word !== "/");
      const value = filteredWords.join("-"); //the server doesn't return what value to keep as parameter for breed in the URL if multiple words, so I'm just handling Petfinder's special cases here.

      return { label: name, value };
    });

    return [breedsList, true];
  } catch (e) {
    console.error("Error in accessing the breeds list.", e);
    return [[], false];
  }
}

export default getBreedsList;
