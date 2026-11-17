
import { useRef, useEffect } from "react";

function SearchBar({ search, setSearch, onSearch }) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
