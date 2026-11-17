
import { createContext, useState, useEffect } from "react";

export const ReadingListContext = createContext();

export function ReadingListProvider({ children }) {

  // Browser se saved books load karna
  const [readingList, setReadingList] = useState(() => {
    const savedBooks = localStorage.getItem("readingList");

    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  // Books ko localStorage mein save karna
  useEffect(() => {
    localStorage.setItem(
      "readingList",
      JSON.stringify(readingList)
    );
  }, [readingList]);

  function addToReadingList(book) {
    setReadingList((previousList) => {
      const alreadyExists = previousList.some(
        (item) => item.key === book.key
      );

      if (alreadyExists) {
        return previousList;
      }

      return [...previousList, book];
    });
  }

  function removeFromReadingList(bookKey) {
    setReadingList((previousList) =>
      previousList.filter((book) => book.key !== bookKey)
    );
  }

  return (
    <ReadingListContext.Provider
      value={{
        readingList,
        addToReadingList,
        removeFromReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
}
