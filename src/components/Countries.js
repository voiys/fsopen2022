import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import CountryList from "./CountryList";

const Countries = ({ nameFilter }) => {
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const [countries, setCountries] = useState([]);

  const renderCountries = (noOfCountries) => {
    if (noOfCountries > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (noOfCountries < 10 && noOfCountries > 1) {
      return countries
        .filter((country) =>
          country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .map((country) => (
          <CountryList
            key={country.name.common}
            countryName={country.name.common}
          />
        ));
    } else {
      return countries
        .filter((country) =>
          country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .map((country) => (
          <Country key={country.name.common} country={country} />
        ));
    }
  };
  return (
    <>
      {renderCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
        ).length
      )}
    </>
  );
};
export default Countries;
