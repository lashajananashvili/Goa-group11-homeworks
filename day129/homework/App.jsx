import ProfileList from "./components/ProfileList";

function App() {
  const users = [
    { name: "John Doe", age: 30, occupation: "Software Engineer" },
    { name: "Jane Smith", age: 27, occupation: "Graphic Designer" },
    { name: "Alice Johnson", age: 35, occupation: "Product Manager" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Profiles</h1>
      <ProfileList profiles={users} />
    </div>
  );
}

export default App;
