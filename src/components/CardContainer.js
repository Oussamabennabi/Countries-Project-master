import { Link } from 'react-router-dom';

export default function CardContainer(props) {

  
  const { darkMode, countries } = props;
  const addDarkMode = darkMode ? "darkMode" : "";
// ============================================

  const cardEl = countries.map(countrie => {

    const { name, population, region, capital, flag } = countrie;

    return (
      <Link  key={`${name} ${population}`} to={`/detail/${name}`}>  
      
      <div
          className={`card ${addDarkMode}`}
      >
        <img className="flag" src={flag} alt={name} />
        <div
          className={`card-content ${addDarkMode}`}>
          <h2>{name}</h2>
          <p><span className="text">Population</span> : {population}</p>
          <p><span className="text">Region</span> : {region}</p>
          <p><span className="text">Capital</span> : {capital}</p>
        </div>
      </div>
    </Link>
    );
  });
  return (
    <div
      className={`card-container ${addDarkMode}`}
    >
      <div className="container">

        {cardEl}
        
      </div>
    </div>
  );
}