import { useState, useEffect } from "react";

import getBreedsList from "../api/getBreedsList.js";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
      setStatus("loaded");
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const [list, ok] = await getBreedsList(animal);
      // list.unshift({ label: "Select a breed", value: "" });
      if (ok) {
        localCache[animal] = list || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
      } else {
        setStatus("unloaded");
      }
    }
  }, [animal]);

  return [breedList, status];
}
