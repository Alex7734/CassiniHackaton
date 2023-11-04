import { useState } from "react";
import SearchBar from "./Searchbar";

const App = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (searchTerm: string) => {
    // Perform search logic here
    const results = ["result1", "result2", "result3"];
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
