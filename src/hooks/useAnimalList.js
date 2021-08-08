import { useState, useEffect } from "react";

import getAnimalsList from "../api/getAnimalsList.js";

let localCache = [];

export default function useAnimalLlist() {
  const [animalList, setAnimalList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (localCache.length) {
      setAnimalList(localCache);
      setStatus("loaded");
    } else {
      requestAnimalList();
    }

    async function requestAnimalList() {
      setAnimalList([]);
      setStatus("loading");

      const [list, ok] = await getAnimalsList();
      // list.unshift({ label: "Select a breed", value: "" });

      if (ok) {
        localCache = list || [];
        setAnimalList(localCache);
        setStatus("loaded");
      } else {
        setStatus("unloaded");
      }
    }
  }, []);

  return [animalList, status];
}
