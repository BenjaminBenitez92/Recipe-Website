import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ handleSearch }) => {
  const [term, setTerm] = useState("");
  const [cusisine, setCusine] = useState("");
  // const [recipe, setRecipe] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      term,
      cusisine,
    };
    // setRecipe(options);
    handleSearch(options);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>What are you in the mood for?</label>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>
        <label>cusisine</label>
        <select onChange={(e) => setCusine(e.target.value)}>
          <option selected disabled>Cusine</option>
          <option value="asian">Asian</option>
          <option value="american">American</option>
          <option value="spanish">Spanish</option>
          <option value="japanese">Japanese</option>
          <option value="indian">Indian</option>
        </select>
      </div>
      <button onClick={handleSubmit}> onSubmit</button>
    </form>
  );
};

export default SearchBar;
