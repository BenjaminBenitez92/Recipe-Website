import { useState } from "react";
import searchReipes from "./api/api";
import SearchBar from "./component/SearchBar";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const handleSearch = async (term) => {
    const data = await searchReipes(term);
    setRecipeList(data);
  };
  console.log(recipeList);
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
}

export default App;
