const Card = ({ title, description }) => {
    return (
      <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px", margin: "10px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  export default Card;
  