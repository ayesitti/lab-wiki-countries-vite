import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((rawResponse) => rawResponse.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul>
      {countries.map((oneCountry) => {
        return (
          <Link key={CountryDetailsPage.alpha2Code}>
          <li>
            to={`/${oneCountry.alpha2Code}`}
            style={{
              color: "green",
            }}
          
            {oneCountry.name.common}
            </li>
          </Link>
          
        );
        
      })}
      </ul>
    </div>
  );
};

export default HomePage;
