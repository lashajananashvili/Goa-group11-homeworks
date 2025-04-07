import React from "react";


export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.items || []);
        })
        .catch((error) => console.error("Error fetching books:", error));
    }
  }, [searchTerm]);

  const addToLibrary = (book) => {
    if (!myLibrary.some((b) => b.id === book.id)) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary(myLibrary.filter((book) => book.id !== bookId));
  };

  return (
    <div className="App">
      <h1>Book Library App</h1>

      <div>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSearchTerm(searchTerm)}>Search</button>
      </div>

      <h2>Search Results</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <button onClick={() => addToLibrary(book)}>
              Add to My Library
            </button>
          </div>
        ))}
      </div>

      <h2>My Library</h2>
      <div className="my-library">
        {myLibrary.map((book) => (
          <div key={book.id} className="library-item">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <button onClick={() => removeFromLibrary(book.id)}>
              Remove from Library
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
