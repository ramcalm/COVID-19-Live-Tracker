import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "../node_modules/@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import './App.css';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(['worldwide']);
  const [countryInfo, setCountryInfo] = useState({});

  // STATE = How to write a variable in REACT 
  // API = https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  })

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


    const url = countryCode === "worldwide" 
      ? 'https://disease.sh/v3/covid-19/all' 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    console.log(url);

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    })

  }
  console.log(countryInfo);

  return (
    <div className="app">
      <div className="app__left">
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
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox 
            title="Coronavirus Cases" 
            total={countryInfo.cases} 
            cases={countryInfo.todayCases} 
          /> 
          <InfoBox 
            title="Recovered"
            total={countryInfo.recovered} 
            cases={countryInfo.todayRecovered}
          />
          <InfoBox 
            title="Deaths"
            total={countryInfo.deaths} 
            cases={countryInfo.todayDeaths}
          />  
        </div>
  
        <Map></Map>
        {/* Map */}
      </div>
      <Card className="app__right">
        <CardContent>
          <h1>Live Cases by Country</h1>
          <h1>Cases Worldwide</h1>
          
        </CardContent>
            
      </Card>
    </div>
  );
}

export default App;
