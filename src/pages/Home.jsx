import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("harry potter");
  const [query, setQuery] = useState("harry potter");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&fields=key,title,author_name,cover_i,first_publish_year&limit=20`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setBooks(data.docs);
      } catch (err) {
        setError(err.message);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [query]);

  function handleSearch() {
    setQuery(search);
  }

  return (
    <div>
      <Navbar />

      <h1>Find Your Favorite Books</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
      />

      {loading && <h3>Loading books...</h3>}

      {error && <p>{error}</p>}

      {!loading && !error && books.length === 0 && (
        <p>No books found</p>
      )}

      <div className="books-container">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;