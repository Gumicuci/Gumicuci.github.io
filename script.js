const apiUrl = "https://your-backend-url.com/data";

function sendPostRequest(payload) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => console.log("Data saved:", data))
    .catch(error => console.error("Error:", error));
}

function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log("Fetched data:", data))
    .catch(error => console.error("Error:", error));
}

// Example usage
sendPostRequest({ message: "Hello from POST request!" });
fetchData();
