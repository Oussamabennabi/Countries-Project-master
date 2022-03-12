// THANK YOU FOR THE HELPING ME   @Johndiddles   in making the boders countries ,languages and currencies. 



import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details(props) {
  const { darkMode } = props;
  const addDarkMode = darkMode ? "darkMode" : "";
  const { countrieName } = useParams();
  const [countrie, setCountrie] = useState([]);
  const [allCountries, setAllCountries] = useState(null);
  const [allBorders, setAllBorders] = useState(null);

  const fetchData = async () => {
    fetch(`https://restcountries.com/v2/name/${countrieName}`)
      .then((response) => response.json())
      .then((data) => setCountrie(data[0]));
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setAllCountries(data));
  }, [countrie]);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    flag,
    topLevelDomain,
    borders,
    languages,
    currencies,
  } = countrie;

  useEffect(() => {
    let borderCountry = [];
    if (borders) {
      for (let i = 0; i < borders.length; i++) {
        allCountries.filter((country) =>
          country.alpha3Code === borders[i]
            ? borderCountry.push(country.name)
            : ""
        );
      }
    }
    
    setAllBorders(borderCountry);
  }, [allCountries]);

  useEffect(() => {
    fetchData();
  }, [countrieName]);

  console.log(countrie);

  return (
    <div className={`details ${addDarkMode}`}>
      <div className="container countrie-container">
        <Link to="/">
          <button className="btn home-btn">
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </Link>
        <div className="countrie">
          <div className="countrie-img">
            <img src={flag} alt={name} />
          </div>
          <div className="countrie-details">
            <h2>{name}</h2>
            <div className="countrie-description">
              <p>
                <span className="text">Native Name </span>: {nativeName}
              </p>
              <p>
                <span className="text">Population </span>: {population}
              </p>
              <p>
                <span className="text">Region </span>: {region}
              </p>
              <p>
                <span className="text">Sub Regions </span>: {subregion}
              </p>
              <p>
                <span className="text">Capital </span>: {capital}
              </p>
              <p>
                <span className="text">Top Level Domain </span>:{" "}
                {topLevelDomain}
              </p>
              <p>
                <span className="text">Currencies </span>:
                {currencies
                  ? currencies.map((currency) => ` ${currency.name} `)
                  : "loading currencies"}
              </p>
              <p>
                <span>Languages</span>:
                {languages
                  ? languages.map((language) => ` ${language.name} `)
                  : "loading languages"}
              </p>
            </div>
            <div className="border-countries">
              <span className="text">Border Countries :</span>
              {!allBorders ? (
                <div>Loading border countries...</div>
              ) : (
                allBorders.map((country) => (
                  <Link key={country} to={`../detail/${country}`}>
                    <button className="btn">{country}</button>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

