import { useState } from "react";
import CountryFilter from "./components/CountryFilter";
import Countries from "./components/Countries";

const App = () => {
  const [nameFilter, setNameFilter] = useState("");

  return (
    <div>
      <CountryFilter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <Countries nameFilter={nameFilter} />
    </div>
  );
};

export default App;
