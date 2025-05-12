const button = document.getElementById("loadMoment")!;
const output = document.getElementById("output")!;

button.addEventListener("click", async () => {
  const moment = await import("moment");
  const now = moment.default().format("YYYY-MM-DD HH:mm:ss");
  output.textContent = "Დრო: " + now;
});
