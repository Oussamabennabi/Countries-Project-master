import { Link } from 'react-router-dom';

export default function CardContainer(props) {

  
  const { darkMode, countries } = props;
  const addDarkMode = darkMode ? "darkMode" : "";
// ============================================

  const cardEl = countries.map(countrie => {

    const { name, population, region, capital, flag } = countrie;
    const styles = {
      color: 'black',
      textDecoration:'none'

    };
    return (
      <Link  to={`/${name}`}>  
      <div
          className={`card ${addDarkMode}`}
          key={population}
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