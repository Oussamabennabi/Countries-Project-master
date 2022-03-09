import {  useEffect,useState} from 'react';
import { Link,useParams } from "react-router-dom";
export default function Details(props){
  const { darkMode } = props
  const addDarkMode = darkMode ? "darkMode" : ""
  const { countrieName } = useParams()
  const [countrie,setCountrie] = useState([])
  const fetchData = async () => {
    fetch(`https://restcountries.com/v2/name/${countrieName}`).then(response => response.json()).then(data => setCountrie(data[0]));
    ;
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log(countrie);
  const {name,nativeName,population,region,subregion,capital,flag,topLevelDomain,languages,currencies} = countrie
  // const currencyEl = currencies[0].forEach(currency => {
  //   // return (<span>{ currency.code}</span>)
  //   return currency
  // })
  // console.log(currencies[0].code)
  // console.log(flag)
  return (
    <div className={`details ${addDarkMode}`}>
      <div className="container countrie-container">
        <Link to="/">
          <button className="btn home-btn"> Back</button>
        </Link>  
        <div className="countrie">
        <div className="countrie-img">
          <img src={flag} alt={name}/>
        </div>
        <div className="countrie-details">
            <h2>{name}</h2>
            <div className="countrie-description">
          <p>
            <span className="text">Native Name </span>
            : {nativeName}
          </p>
          <p>
            <span className="text">Population </span>
            : {population}
          </p>
          <p>
            <span className="text">Region </span>
            : {region}
          </p>
          <p>
            <span className="text">Sub Regions </span>
            : {subregion}
          </p>
          <p>
            <span className="text">Capital </span>
            : {capital}
          </p>
          <p>
            <span className="text">Top Level Domain </span>
            : {topLevelDomain}
          </p>
          <p>
            <span className="text">Currencies </span>
            {/* : {currencies[0].code} */}
          </p>
          <p>
            <span className="text">Languages</span>
            {/* : {languages[0].name} */}
          </p>
          </div>
          <div className="border-countries">
            <span className="text">Border Countries :</span>
            <Link to="ou">
              <button className="btn">France</button>
            </Link>
            <Link to="ou">
              <button className="btn">France</button>
            </Link>
            <Link to="ou">
              <button className="btn">France</button>
            </Link>
            <Link to="ou">
              <button className="btn">France</button>
            </Link>
            </div>
        </div>
        </div>

      </div>
    
    </div>


  );
}