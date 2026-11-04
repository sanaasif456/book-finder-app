
import { useRef, useEffect } from "react";

function SearchBar({ search, setSearch, onSearch }) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className="search-container">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
