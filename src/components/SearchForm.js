import { useHistory } from "react-router-dom";

import useAnimalList from "../hooks/useAnimalList";
import useBreedList from "../hooks/useBreedList";
import { Button } from "../components/Button.js";
import requestPets from "../api/requestPets.js";
import { useEffect, useState } from "react";

const SearchForm = ({ params, setPets, setLoading, setPagination }) => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");

  const [animals] = useAnimalList();
  const [breeds] = useBreedList(animal);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    setPets([]);
    requestPets(animal, breed, location, params.page)
      .then(([json, ok]) => {
        if (ok) {
          setPets(json.animals);
          setLoading(false);
          setPagination(json.pagination);
          console.log("Pets found", json);
        } else {
          setPets([]), setLoading(false);
          // setPagination({ current_page: 1, total_count: 1 });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [params]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const json = await requestPets(animal, breed, location);
        setPets(json.pets);
        setLoading(false);
        history.push("/1");
      }}
      className="p-10 mb-10 rounded-lg bg-gray-300 shadow-xl flex flex-col justify-center items-center max-w-md mx-auto"
    >
      <input
        id="location"
        value={location}
        placeholder="Enter a location"
        onChange={(e) => updateLocation(e.target.value)}
        className="px-3 py-3 rounded-2xl w-3/4 border-none outline-none focus:ring-2 ring-blue-500 hover:bg-gray-200 focus:bg-gray-100 transition duration-300 mb-8 bg-white shadow:sm hover:shadow-lg focus:shadow-lg"
      />
      <select
        id="animal"
        value={animal}
        disabled={!animals.length}
        onChange={(e) => {
          updateAnimal(e.target.value);
          updateBreed("");
        }}
        onBlur={(e) => {
          updateAnimal(e.target.value);
          updateBreed("");
        }}
        className="px-3 py-3 rounded-2xl w-3/4 border-none outline-none focus:ring-2 ring-blue-500 hover:bg-gray-200 focus:bg-gray-100 transition duration-300 mb-8 bg-white shadow:sm hover:shadow-lg focus:shadow-lg"
      >
        <option className="" value="">
          Select an animal
        </option>
        {animals.map((animal) => (
          <option key={animal.value} value={animal.value} className="">
            {animal.label}
          </option>
        ))}
      </select>
      <select
        disabled={!breeds.length}
        id="breed"
        value={breed}
        onChange={(e) => updateBreed(e.target.value)}
        onBlur={(e) => updateBreed(e.target.value)}
        className="px-3 py-3 rounded-2xl w-3/4 border-none outline-none focus:ring-2 ring-blue-500 hover:bg-gray-200 focus:bg-gray-100 transition duration-300 mb-8 bg-white shadow:sm hover:shadow-lg focus:shadow-lg"
      >
        <option className="" value="">
          Select a breed
        </option>
        {breeds.map((breed) => (
          <option key={breed.value} value={breed.value}>
            {breed.label}
          </option>
        ))}
      </select>
      <Button>Submit</Button>
    </form>
  );
};

export default SearchForm;
