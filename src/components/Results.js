import Loading from "./Loading.js";
import Pet from "./Pet";

const Results = ({ pets, loading }) => {
  if (loading) return <Loading />;

  return !(pets && pets.length) ? (
    <h1 className="text-center text-4xl font-bold animate-bounce">
      No Pets Found
    </h1>
  ) : (
    <div className="grid gap-3 lg:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {pets.map((pet) => {
        return (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            images={pet.photos.map((p) => p.medium)}
            location={`${pet.contact.address.city}, ${pet.contact.address.state} - ${pet.contact.address.postcode}`}
            id={pet.id}
          />
        );
      })}
    </div>
  );
};

export default Results;
