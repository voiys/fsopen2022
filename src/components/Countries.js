import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import CountryList from "./CountryList";

const Countries = ({ nameFilter }) => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  
  const matches = countries.filter((country) =>
    country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
  );
  
  const noOfCountries = matches.length;


  if (noOfCountries > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (noOfCountries < 10 && noOfCountries > 1) {
    return matches.map((country) => (
        <CountryList
          key={country.name.common}
          countryName={country.name.common}
        />
      ));
  } else {
    return matches.map((country) => (
        <Country key={country.name.common} country={country} />
      ));
  }
};
export default Countries;
