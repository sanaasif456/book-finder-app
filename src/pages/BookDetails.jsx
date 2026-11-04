import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );

        if (!response.ok) {
          throw new Error("Book details not found!");
        }

        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBookDetails();
  }, [id]);

  if (loading) return <h2>Loading book details...</h2>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{book.title}</h1>

      <h3>Book Description</h3>

      <p>
        {typeof book.description === "string"
          ? book.description
          : book.description?.value || "No description available."}
      </p>
    </div>
  );
}

export default BookDetails;