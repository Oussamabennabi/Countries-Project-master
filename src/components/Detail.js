import { Link } from 'react-router-dom';
export default function Details(){



  return (
    <div>
      <button className="btn"> Back</button>
      <div className="countrie-container">
        <div className="countrie-img">
          <img src="" alt=""/>
        </div>
        <div className="countrie-details">
          <h2>america</h2>
          <p>
            <span className="text">Native Name</span>
            : oussama
          </p>
          <p>
            <span className="text">Population</span>
            : oussama
          </p>
          <p>
            <span className="text">Region</span>
            : oussama
          </p>
          <p>
            <span className="text">Sub Regions</span>
            : oussama
          </p>
          <p>
            <span className="text">Capital</span>
            : oussama
          </p>
          <p>
            <span className="text">Top Level Domain</span>
            : oussama
          </p>
          <p>
            <span className="text">Currencies</span>
            : oussama
          </p>
          <p>
            <span className="text">Languages</span>
            : oussama
          </p>
          <div className="border-countries">
            <span className="text">Border Countries</span>
            <Link to="ouss">
              <button className="btn">France</button>
            </Link>
          </div>
        </div>
      </div>
    
    </div>


  );
}