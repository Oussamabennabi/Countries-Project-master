import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CardContainer from './components/CardContainer';
import Detail from './components/Detail';
import { BrowserRouter as Router,Route}from 'react-router-dom';
function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
    
  }
  const body = document.body;
  if (darkMode) {
    body.classList.add('darkBody')
  } else {
    body.classList.remove('darkBody')
    }
 // ==============================================================
  
  // working with the data :
  
  const [countries, setCountries] = React.useState([]);
  // set initialaly first 100 countrie . 
  const fetchCountries = async () => {
    fetch(`https://restcountries.com/v2/all`).then(resp => resp.json()).then(data => setCountries(data.slice(0,100)));
  }

  // working with the input .
  const fetchCountrie = async (value) => {
    fetch(`https://restcountries.com/v2/name/${value}`).then(resp => resp.json()).then(data => setCountries(data)).catch(err => console.log(err));
  }
  // HANDLE SUBMITING
  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.children[0].children[1];

    fetchCountrie(value);
  }
  // HANDLE REGION SELECTING
  function selectRegion(e) {
    const { value } = e.target;
    let selectedValue ="Africa";
    if (value === "Africa") {
      selectedValue = "AU";
    } else if (value === "America") {
      selectedValue = "USAN";
    } else if (value === "Asia") {
      selectedValue = "SAARC";
    } else if (value === "Europe") {
      selectedValue = "EU";
    } else if (value === "Oceania") {
      selectedValue = "CEFTA";
    }
    fetchRegion(selectedValue)
  }
  const fetchRegion = async (selectRegion) => {
    fetch(`https://restcountries.com/v2/regionalbloc/${selectRegion}`).then(resp => resp.json()).then(data => setCountries(data)).catch(err => console.log(err));

  }

  React.useEffect(() => {
    fetchCountries();
  },[])
  return (
    <Router>
    <div>
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Route path="/" exact>
          <Form
            darkMode={darkMode}
            handleSubmit={handleSubmit}
            Region={selectRegion}
          />
        </Route>

        <Route exact path="/">
          <CardContainer
          darkMode={darkMode}
          countries={countries}
        /> 
        </Route>
        <Route   path="/detail/:countrieName" >
          <Detail  darkMode={darkMode}/>
        </Route>
      
    </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
