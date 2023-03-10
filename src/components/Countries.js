import CountryView from "./CountryView";
import CountryViewButton from "./CountryViewButton";

const Countries = ({ filteredCountries }) => {
  let message = "";

  if (filteredCountries.length === 0) {
    message = "not found";
  } else if (filteredCountries.length > 10) {
    message = "too many results. refine your search query";
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    message = <CountryView country={country} />;
  } else {
    message = filteredCountries.map((country) => (
      <CountryViewButton country={country} key={country.name.common} />
    ));
  }

  return <div>{message}</div>;
};

export default Countries;
