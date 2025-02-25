const Button = ({ text, onClick }) => {
    return <button style={{ padding: "10px 20px", fontSize: "16px" }} onClick={onClick}>{text}</button>;
  };
  export default Button;
  