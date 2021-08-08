import { useState } from "react";

import Results from "../components/Results";
import { PageNav } from "../components/PageNav.js";
import SearchForm from "../components/SearchForm.js";

const SearchPage = ({ match }) => {
  const [pets, setPets] = useState([]); //to store an array of animal objects returned from API on search
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total_count: 1,
    current_page: 1,
  });

  return (
    <div className="my-0 mx-auto w-11/12">
      <SearchForm
        params={match.params}
        setPets={setPets}
        setLoading={setLoading}
        setPagination={setPagination}
      />
      <PageNav pagination={pagination} />
      <Results pets={pets} loading={loading} />
      <PageNav pagination={pagination} />
    </div>
  );
};

export default SearchPage;
