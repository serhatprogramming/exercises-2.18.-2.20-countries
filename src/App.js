import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countrySearch, setCountrySearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      console.log(response.data.map((country) => country.name.common));
    });
  }, []);

  const handleSearh = (e) => {
    setCountrySearch(e.target.value);
    let filtered = [];
    if (e.target.value.length > 0) {
      filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  };

  return (
    <div>
      find countries <input value={countrySearch} onChange={handleSearh} />{" "}
      <Countries filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
