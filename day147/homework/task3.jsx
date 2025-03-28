import { useState, useEffect } from "react";

export default function BookLibraryApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [library, setLibrary] = useState(() => {
    return JSON.parse(localStorage.getItem("library")) || [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setBooks(data.items || []));
    }
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  const addToLibrary = (book) => {
    if (!library.some((b) => b.id === book.id)) {
      setLibrary([...library, { ...book, read: false }]);
    }
  };

  const toggleReadStatus = (id) => {
    setLibrary((prevLibrary) =>
      prevLibrary.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  const filteredLibrary =
    filter === "all"
      ? library
      : library.filter((book) => (filter === "read" ? book.read : !book.read));

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <h2 className="text-xl font-bold">Search Results</h2>
      <div>
        {books.map((book) => (
          <div key={book.id} className="border p-2 mb-2">
            <p className="font-semibold">{book.volumeInfo.title}</p>
            <button
              onClick={() => addToLibrary(book)}
              className="bg-blue-500 text-white p-1 mt-2"
            >
              Add to Library
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-4">My Library</h2>
      <select onChange={(e) => setFilter(e.target.value)} className="mb-4">
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>

      <div>
        {filteredLibrary.map((book) => (
          <div key={book.id} className="border p-2 mb-2">
            <p className="font-semibold">{book.volumeInfo.title}</p>
            <button
              onClick={() => toggleReadStatus(book.id)}
              className={`p-1 mt-2 ${book.read ? "bg-green-500" : "bg-gray-500"}`}
            >
              {book.read ? "Mark as Unread" : "Mark as Read"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}