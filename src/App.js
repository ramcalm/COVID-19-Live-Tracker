import React, { useState, useEffect } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from "../node_modules/@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(['worldwide']);

  // STATE = How to write a variable in REACT 
  // API = https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    // async = send a request, wait for it, do something with the info

    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // United States, United Kingdom, France
            value: country.countryInfo.iso2 //UK, US, FR
          }));
        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant='outlined' onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
            {/* Loop through all countries and show a dropdown */}
            {/*<MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">worldwide2</MenuItem>
            <MenuItem value="worldwide">worldwide3</MenuItem>
            <MenuItem value="worldwide">worldwide4</MenuItem>  */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown */}
      
      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}

      {/* Table */}
      {/* Graph */}
      
      {/* Map */}

    </div>
  );
}

export default App;
