// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("VajraOS Community loaded successfully!");
});

// Example search handler
function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter something to search.");
  }
  return false;
}
