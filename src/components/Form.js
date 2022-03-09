export default function Form(props) {
  const { darkMode } = props
  const addDarkMode = darkMode ? "darkMode" : ""
  return (
    
    <form className={`form ${addDarkMode}`}>
      <div className="container">
        <i
          className={`fa-solid fa-magnifying-glass ${addDarkMode}`}></i>
        <input
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