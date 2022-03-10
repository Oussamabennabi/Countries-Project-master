import { useEffect, useState } from 'react';

export default function Form(props) {

  const { darkMode ,handleSubmit} = props
  const addDarkMode = darkMode ? "darkMode" : ""

  const [formData, setFormData] = useState({
    countrie: ""
  });

  function onChange(e) {
    const { value } = e.target
    setFormData(prevData => ({
      ...prevData,
      countrie : value
    }))
  }
  
  return (
    
    <form
      className={`form ${addDarkMode}`}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <i
          className={`fa-solid fa-magnifying-glass ${addDarkMode}`}></i>
        <input 
          onChange={onChange}
          value={formData.countrie}
          className={addDarkMode}
          placeholder="Search for a country..." />
        <select
          className={`select ${addDarkMode}`}
          defaultValue="Filter by Region">
          {/* <option disabled selected value="Filter by Region">Filter by Region</option> */}
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>
      </form>
  );
}