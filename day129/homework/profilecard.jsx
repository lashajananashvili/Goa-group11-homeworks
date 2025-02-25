const ProfileCard = ({ name, age, occupation }) => {
    return (
      <div style={cardStyle}>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
      </div>
    );
  };
  
  const cardStyle = {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  };
  
  export default ProfileCard;
  