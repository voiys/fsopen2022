import React from "react";

const CountryFilter = ({ nameFilter, setNameFilter }) => {
  return (
    <div>
      find countries:
      <input
        onChange={(e) => setNameFilter(e.target.value)}
        value={nameFilter}
      />
    </div>
  );
};
export default CountryFilter;
