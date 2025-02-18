const isDarkMode = true;
const styles = {
  backgroundColor: isDarkMode ? "black" : "white",
  color: isDarkMode ? "white" : "black",
  padding: "20px",
  textAlign: "center"
};

function StyledDiv() {
  return <div style={styles}>This is a styled div</div>;
}
