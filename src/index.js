import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CardContainer from './components/CardContainer';
import Data from './components/Data';
import Detail from './components/Detail';
import { BrowserRouter as Router,Route,Switch}from 'react-router-dom';
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
  
  React.useEffect(() => {
    setCountries(Data.slice(0,100));

    },[])

  return (
    <Router>
    <div
      className={`body ${darkMode ? "bodyDarkMode": ""}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
        {/* <Route path="/" element={<Form />} /> */}
        {/* <Form 
        darkMode={darkMode}
      />
      <CardContainer
          darkMode={darkMode}
          
        countries={countries}
        /> */}
        <Detail/>
        {/* <Route path="/detail" component={Detail}/> */}
    </div>
    </Router>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
