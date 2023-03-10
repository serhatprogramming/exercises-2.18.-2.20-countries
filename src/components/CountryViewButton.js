import React from "react";

import { useState } from "react";
import CountryView from "./CountryView";

const CountryViewButton = ({ country }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        {country.name.common}{" "}
        <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      </p>
      {show ? <CountryView country={country} /> : ""}
    </div>
  );
};

export default CountryViewButton;
