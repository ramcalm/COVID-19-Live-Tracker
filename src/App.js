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
import Table from "./Table"
import LineGraph from "./LineGraph"
import './App.css';
import { sortData, prettyPrintStat } from "./util"
import "leaflet/dist/leaflet.css"


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(['worldwide']);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  // STATE = How to write a variable in REACT 
  // API = https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
      
    })
  }, []);

  console.log(countryInfo);

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
        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
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

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
      console.log(countryCode);
      if(countryCode != "worldwide")
      {
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      }
      else
      {
      setMapCenter([34.80746, -40.4796])
      } 
      setMapZoom(4);
    })

  }


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1 className="heading">COVID-19 tracker</h1>
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
            isRed 
            active={casesType === "cases"}
            onClick={e => setCasesType('cases')}
            title="Coronavirus Cases" 
            total={prettyPrintStat(countryInfo.cases)} 
            cases={prettyPrintStat(countryInfo.todayCases)} 
          /> 
          <InfoBox 
            active={casesType === "recovered"}
            onClick={e => setCasesType('recovered')}
            title="Recovered"
            total={prettyPrintStat(countryInfo.recovered)} 
            cases={prettyPrintStat(countryInfo.todayRecovered)}
          />
          <InfoBox 
            isRed
            active={casesType === "deaths"}
            onClick={e => setCasesType('deaths')}
            title="Deaths"
            total={prettyPrintStat(countryInfo.deaths)} 
            cases={prettyPrintStat(countryInfo.todayDeaths)}
          />  

        </div>
  
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />

      </div>
      <Card className="app__right">
        <CardContent>
          <h1>Live Cases by Country</h1>
          <Table countries={tableData} />
          <h2>Worldwide new cases</h2>
          <LineGraph className="app__graph" casesType={casesType} />
          
        </CardContent>
            
      </Card>

    </div>
  );
}

export default App;
