import { Link } from "react-router-dom";
import { useContext } from "react";
import { ReadingListContext } from "../context/ReadingListContext";

function BookCard({ book }) {
  const bookId = book.key.split("/").pop();

  const { readingList, addToReadingList, removeFromReadingList } =
    useContext(ReadingListContext);

  const isSaved = readingList.some(
    (item) => item.key === book.key
  );

  return (
    <div className="book-card">
      {book.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          width="120"
        />
      )}

      <h3>{book.title}</h3>

      <p>
        Author: {book.author_name?.[0] || "Unknown Author"}
      </p>

      <p>
        Published: {book.first_publish_year || "Unknown"}
      </p>

      <Link to={`/book/${bookId}`}>
        View Details
      </Link>

      <br />

      <button
        onClick={() =>
          isSaved
            ? removeFromReadingList(book.key)
            : addToReadingList(book)
        }
      >
        {isSaved ? "Remove from Reading List" : "Add to Reading List"}
      </button>
    </div>
  );
}

export default BookCard;