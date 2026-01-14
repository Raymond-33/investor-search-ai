async function searchInvestors() {
  const sector = document.getElementById("sector").value.trim();
  const country = document.getElementById("country").value.trim();
  const resultsDiv = document.getElementById("results");

  if (!sector || !country) {
    alert("Please enter both sector and country");
    return;
  }

  resultsDiv.textContent = "Searching investors...";

  try {
    const response = await fetch("http://localhost:5000/search-investors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sector, country })
    });

    const data = await response.json();
    resultsDiv.textContent = data.result;
  } catch (error) {
    resultsDiv.textContent = "Error fetching investor data.";
  }
}
