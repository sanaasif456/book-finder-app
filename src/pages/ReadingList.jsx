
import { useContext } from "react";
import { ReadingListContext } from "../context/ReadingListContext";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";

function ReadingList() {
  const { readingList } = useContext(ReadingListContext);

  return (
    <div>
      <Navbar />

      <h1>My Reading List</h1>

      {readingList.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="books-container">
          {readingList.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReadingList;
