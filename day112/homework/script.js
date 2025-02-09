const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

const fetchCryptoData = async (crypto) => {
  try {
    const response = await fetch(`${apiUrl}&ids=${crypto}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    renderCryptoData(data);
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    document.getElementById("results").innerHTML = `<p>Error: ${error.message}</p>`;
  }
};

const renderCryptoData = (data) => {
  const resultsDiv = document.getElementById("results");
  if (data.length === 0) {
    resultsDiv.innerHTML = `<p>No results found.</p>`;
    return;
  }

  const crypto = data[0];
  resultsDiv.innerHTML = `
    <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
    <p>Price: $${crypto.current_price}</p>
    <p>Market Cap: $${crypto.market_cap}</p>
    <p>24h Change: ${crypto.price_change_percentage_24h}%</p>
  `;
};

document.getElementById("searchButton").addEventListener("click", () => {
  const cryptoInput = document.getElementById("cryptoInput").value.trim().toLowerCase();
  if (cryptoInput) {
    fetchCryptoData(cryptoInput);
  } else {
    alert("Please enter a cryptocurrency name.");
  }
});