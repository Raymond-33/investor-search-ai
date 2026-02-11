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

    console.log("Frontend received:", data);

    if (!response.ok) {
      resultsDiv.textContent = data.error || "Server error occurred.";
      return;
    }

    resultsDiv.innerHTML = "";

    const investors = data.result
      .split(/\d+\.\s+/)
      .filter(item => item.trim() !== "");

    investors.forEach((investor, index) => {
      const div = document.createElement("div");
      div.className = "investor-card";
      div.textContent = `${index + 1}. ${investor.trim()}`;
      resultsDiv.appendChild(div);
    });

  } catch (error) {
    console.error("Network Error:", error);
    resultsDiv.textContent = "Network error. Check if backend is running.";
  }
}
