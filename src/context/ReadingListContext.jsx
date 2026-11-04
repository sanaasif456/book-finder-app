import { createContext, useState } from "react";

export const ReadingListContext = createContext();

export function ReadingListProvider({ children }) {
  const [readingList, setReadingList] = useState([]);

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